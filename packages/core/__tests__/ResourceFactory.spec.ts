import cf from 'clownface'
import { foaf, rdf, schema } from '@tpluscode/rdf-ns-builders'
import { turtle } from '@tpluscode/rdf-string'
import $rdf from 'rdf-ext'
import ResourceFactory, { Constructor } from '../lib/ResourceFactory'
import { parse, ex } from './_helpers'
import RdfResourceImpl from '../RdfResource'
import clownface from 'clownface'

function NeverApply() {
  return class {
    public notFound = ''
  }
}
NeverApply.shouldApply = false

function AlwaysApply<T extends Constructor>(base: T) {
  class AA extends base {
    public willBeThere = ''

    get alwaysThere() {
      return this.id
    }
  }

  return AA
}
AlwaysApply.shouldApply = true

describe('ResourceFactory', () => {
  let factory: ResourceFactory
  beforeEach(() => {
    factory = new ResourceFactory(RdfResourceImpl)
  })

  it('adds applicable mixin to resource', async () => {
    // given
    const term = cf({
      dataset: await parse(turtle`
        ${ex.res} a ${foaf.Person} .`),
      term: ex.res,
    })
    factory.addMixin(NeverApply)
    factory.addMixin(AlwaysApply)

    // when
    const entity = factory.createEntity(term)

    // then
    const ctor = entity.constructor as Constructor
    expect(ctor.__mixins).toHaveLength(2)
    expect(entity).not.toHaveProperty('notFound')
    expect(entity).toHaveProperty('alwaysThere')
  })

  it('applies mixins selected by type named node', async () => {
    // given
    function FoafPerson<T extends Constructor>(base: T) {
      class P extends base {
        public foafName = ''
      }

      return P
    }
    FoafPerson.appliesTo = schema.Person
    factory.addMixin(FoafPerson)

    function SchemaPerson<T extends Constructor>(base: T) {
      class P extends base {
        public schemaName = ''
      }

      return P
    }
    SchemaPerson.appliesTo = schema.Person
    factory.addMixin(SchemaPerson)

    const term = cf({
      dataset: await parse(turtle`
        ${ex.res} a ${foaf.Person}, ${schema.Person} .`),
      term: ex.res,
    })

    // when
    const entity = factory.createEntity(term)

    // then
    expect(entity).toHaveProperty('foafName')
    expect(entity).toHaveProperty('schemaName')
  })

  it('returns correct type for changed base class in subsequent calls', () => {
    // given
    class Foo extends RdfResourceImpl {
      get bar() {
        return 'baz'
      }
    }

    const term = cf({
      dataset: $rdf.dataset(),
      term: ex.res,
    })

    // when
    factory.createEntity(term)
    const entity = factory.createEntity(term, [Foo])

    // then
    expect(entity.bar).toBe('baz')
  })

  it('sets rdf:types initialized with TypeCollection', () => {
    // given
    const pointer = clownface({ dataset: $rdf.dataset() }).blankNode()
    const { types } = new RdfResourceImpl(clownface({ dataset: $rdf.dataset() }).blankNode().addOut(rdf.type, schema.Person))

    // when
    const resource = factory.createEntity(pointer, [], {
      initializer: {
        types,
      },
    })

    // then
    expect(resource.types.has(schema.Person)).toBe(true)
  })
})
