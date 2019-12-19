import { prefixes } from '@zazuko/rdf-vocabularies'
import { literal } from '../lib/decorators'
import RdfResource from '../lib/RdfResource'
import { parse, vocabs } from './_helpers'

const { ex, schema } = vocabs

describe('decorator', () => {
  describe('literal', () => {
    it('returns string value of literal', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix schema: <${prefixes.schema}> .
        
        ex:res schema:name "John Doe" .
      `)
      class Resource extends RdfResource {
        @literal({ path: schema.name })
        name?: string
      }

      // when
      const instance = new Resource({
        dataset,
        term: ex.res,
      })

      // then
      expect(instance.name).toEqual('John Doe')
    })

    it('returns boolean when type is set', async () => {
    // given
      const dataset = await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix schema: <${prefixes.schema}> .
        @prefix xsd: <${prefixes.xsd}> .
        
        ex:res ex:isMarried true .
        ex:res ex:isSingle "false"^^xsd:boolean .
      `)
      class Resource extends RdfResource {
        @literal({ path: ex.isMarried, type: Boolean })
        married?: boolean

        @literal({ path: ex.isSingle, type: Boolean })
        single?: boolean
      }

      // when
      const instance = new Resource({
        dataset,
        term: ex.res,
      })

      // then
      expect(instance.single).toStrictEqual(false)
      expect(instance.married).toStrictEqual(true)
    })
  })
})
