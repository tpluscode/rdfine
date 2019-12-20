import { prefixes } from '@zazuko/rdf-vocabularies'
import { property } from '..'
import RdfResource from '../lib/RdfResource'
import { parse, vocabs } from './_helpers'
import { Literal } from 'rdf-js'
import { literal } from 'rdf-data-model'

const { ex, schema } = vocabs

describe('decorator', () => {
  describe('literal', () => {
    describe('getter', () => {
      it('returns string value of literal', async () => {
      // given
        const dataset = await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix schema: <${prefixes.schema}> .
        
        ex:res schema:name "John Doe" .
      `)
        class Resource extends RdfResource {
          @property.literal({ path: schema.name })
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
          @property.literal({ path: ex.isMarried, type: Boolean })
          married?: boolean

          @property.literal({ path: ex.isSingle, type: Boolean })
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

    describe('setter', () => {
      it('accepts raw term', async () => {
        // given
        const dataset = await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix schema: <${prefixes.schema}> .
        @prefix xsd: <${prefixes.xsd}> .
        
        ex:res schema:name "Johann"@de .
      `)
        class Resource extends RdfResource {
          @property.literal({ path: schema.name })
          name?: string | Literal
        }

        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // when
        instance.name = literal('John', 'en-gb')

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('replaces boolean object value', async () => {
        // given
        const dataset = await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix schema: <${prefixes.schema}> .
        @prefix xsd: <${prefixes.xsd}> .
        
        ex:res ex:isMarried true .
      `)
        class Resource extends RdfResource {
          @property.literal({ path: ex.isMarried, type: Boolean })
          married?: boolean
        }

        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // when
        instance.married = false

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('replaces string object value', async () => {
        // given
        const dataset = await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix schema: <${prefixes.schema}> .
        @prefix xsd: <${prefixes.xsd}> .
        
        ex:res schema:name "John" .
      `)
        class Resource extends RdfResource {
          @property.literal({ path: schema.name })
          name?: string
        }

        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // when
        instance.name = 'Jane'

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('unsets string object when null is set', async () => {
        // given
        const dataset = await parse(`
        @prefix ex: <${prefixes.ex}> .
        @prefix schema: <${prefixes.schema}> .
        @prefix xsd: <${prefixes.xsd}> .
        
        ex:res schema:name "John" .
      `)
        class Resource extends RdfResource {
          @property.literal({ path: schema.name })
          name: string | null = null
        }

        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // when
        instance.name = null

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })
    })
  })
})
