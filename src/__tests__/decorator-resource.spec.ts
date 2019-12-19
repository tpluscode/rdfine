import { prefixes } from '@zazuko/rdf-vocabularies'
import { resource } from '../lib/decorators'
import RdfResource from '../lib/RdfResource'
import { parse, vocabs } from './_helpers'

const { ex, foaf, schema } = vocabs

describe('decorator', () => {
  describe('resource', () => {
    it('returns a resource object using path predicate', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix foaf: <${prefixes.foaf}> .
        
        ex:res foaf:friend ex:friend .
      `)

      class Resource extends RdfResource {
        @resource({ path: foaf.friend })
        friend?: RdfResource
      }

      // when
      const instance = new Resource({
        dataset,
        term: ex.res,
      })
      const friend = instance.friend

      // then
      expect(friend).toBeInstanceOf(RdfResource)
      expect(friend!.id.value).toEqual(ex.friend.value)
    })

    it('sets a relation between resources', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix schema: <${prefixes.schema}> .
        
        ex:john a schema:Person .
        ex:jane a schema:Person .
      `)

      class Resource extends RdfResource {
        @resource({ path: schema.spouse })
        spouse?: RdfResource
      }
      const john = new Resource({ dataset, term: ex.john })
      const jane = new Resource({ dataset, term: ex.jane })

      // when
      john.spouse = jane

      // then
      expect(john._node.dataset.toCanonical()).toMatchSnapshot()
    })

    it('setting null removes relation', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix schema: <${prefixes.schema}> .
        
        ex:john a schema:Person .
        ex:jane a schema:Person .
        
        ex:john schema:spouse ex:jane .
      `)

      class Resource extends RdfResource {
        @resource({ path: schema.spouse })
        spouse?: RdfResource | null
      }
      const john = new Resource({ dataset, term: ex.john })

      // when
      john.spouse = null

      // then
      expect(john._node.dataset.toCanonical()).toMatchSnapshot()
    })
  })
})
