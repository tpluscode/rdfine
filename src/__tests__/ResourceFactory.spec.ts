import cf from 'clownface'
import { prefixes } from '@zazuko/rdf-vocabularies'
import { Constructor, ResourceFactory } from '../lib/ResourceFactory'
import { parse, vocabs } from './_helpers'
import RdfResourceImpl from '../lib/RdfResource'

const { ex } = vocabs

const factory = new ResourceFactory()
factory.baseClass = RdfResourceImpl

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

factory.addMixin(NeverApply)
factory.addMixin(AlwaysApply)

describe('ResourceFactory', () => {
  it('adds applicable mixin to resource', async () => {
    // given
    const term = cf({
      dataset: await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix foaf: <${prefixes.foaf}> .

        ex:res a foaf:Person .`),
      term: ex.res,
    })

    // when
    const entity = factory.createEntity(term)

    // then
    expect(entity).not.toHaveProperty('notFound')
    expect(entity).toHaveProperty('alwaysThere')
  })
})
