import { prefixes } from '@zazuko/rdf-vocabularies'
import { term } from '../lib/decorators'
import RdfResource from '../lib/RdfResource'
import { parse, vocabs } from './_helpers'
import { NamedNode } from 'rdf-js'

const { ex, foaf } = vocabs

describe('decorator', () => {
  describe('term', () => {
    it('returns raw term from property', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix foaf: <${prefixes.foaf}> .
        
        ex:res foaf:friend ex:friend .
      `)
      class Resource extends RdfResource {
        @term({ path: foaf.friend })
        friend?: NamedNode
      }

      // when
      const instance = new Resource({
        dataset,
        term: ex.res,
      })
      const friend = instance.friend

      // then
      expect(friend!.value).toEqual(ex.friend.value)
    })
  })
})
