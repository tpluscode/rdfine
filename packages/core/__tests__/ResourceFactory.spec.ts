import cf from 'clownface'
import { foaf, schema } from '@tpluscode/rdf-ns-builders'
import { turtle } from '@tpluscode/rdf-string'
import ResourceFactory, { Constructor } from '../lib/ResourceFactory'
import { parse, vocabs } from './_helpers'
import RdfResourceImpl from '../RdfResource'

const { ex } = vocabs

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
})
