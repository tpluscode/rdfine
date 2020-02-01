/* global BigInt */
import { prefixes } from '@zazuko/rdf-vocabularies'
import { property } from '..'
import RdfResource from '../RdfResource'
import { parse, vocabs } from './_helpers'
import { Literal } from 'rdf-js'
import { blankNode, literal, namedNode } from '@rdfjs/data-model'
import rdfExt from 'rdf-ext'

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

      it('returns integer when type is set', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          @prefix xsd: <${prefixes.xsd}> .
          
          ex:res ex:age "30" .
        `)
        class Resource extends RdfResource {
          @property.literal({ path: ex.age, type: Number })
          age!: number
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // then
        expect(instance.age).toStrictEqual(30)
      })

      it('returns float when type is set and node is floating point', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          @prefix xsd: <${prefixes.xsd}> .
          
          ex:res ex:age 30.6 .
        `)
        class Resource extends RdfResource {
          @property.literal({ path: ex.age, type: Number })
          age!: number
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // then
        expect(instance.age).toStrictEqual(30.6)
      })

      it('returns rdf list array', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res ex:letters ( "a" "b" "c" ) .
        `)
        class Resource extends RdfResource {
          @property.literal({ path: ex.letters, values: 'list' })
          letters?: string[]
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // then
        expect(instance.letters).toEqual(['a', 'b', 'c'])
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

      it('sets xsd:integer literal for int number', async () => {
        // given
        const dataset = rdfExt.dataset()

        class Resource extends RdfResource {
          @property.literal({ path: ex.age, type: Number })
          age!: number
        }

        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // when
        instance.age = 30

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('sets xsd:float literal for float number', async () => {
        // given
        const dataset = rdfExt.dataset()

        class Resource extends RdfResource {
          @property.literal({ path: ex.age, type: Number })
          age!: number
        }

        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // when
        instance.age = 30.4

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('sets xsd:long literal for bigint', async () => {
        // given
        const dataset = rdfExt.dataset()

        class Resource extends RdfResource {
          @property.literal({ path: ex.age, type: Number })
          age!: bigint
        }

        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // when
        instance.age = BigInt(9007199254740991)

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

      it('replaces string literal node value', async () => {
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
        }) as any

        // when
        instance.name = literal('Jane', ex.Name)

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('replaces string literal node value', async () => {
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
        }) as any

        // when
        instance.name = instance._selfGraph.literal('Jane', ex.Name)

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

      it('throws when trying to set a named node', async () => {
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
        }) as any

        // the
        expect(() => {
          instance.name = namedNode('foo')
        }).toThrow()
      })

      it('throws when trying to set a blank node', async () => {
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
        }) as any

        // the
        expect(() => {
          instance.name = blankNode('foo')
        }).toThrow()
      })

      it('throws when trying to set a resource', async () => {
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
        }) as any

        // the
        expect(() => {
          instance.name = instance
        }).toThrow()
      })
    })

    describe('initial', () => {
      it('sets default value when not present in dataset', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property.literal({
            path: schema.name,
            initial: 'foo',
          })
          name = 'foo'
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // then
        expect(instance.name).toEqual('foo')
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('does not set initialized value when present in initial dataset', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          @prefix xsd: <${prefixes.xsd}> .
          
          ex:res schema:name "bar" .
        `)
        class Resource extends RdfResource {
          @property.literal({
            path: schema.name,
            initial: 'foo',
          })
          name!: string
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // then
        expect(instance.name).toEqual('bar')
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('sets initial value from node', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property.literal({
            path: schema.name,
            initial: literal('foo'),
          })
          name!: string
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // then
        expect(instance.name).toEqual('foo')
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('sets initial value from function', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property.literal({
            path: schema.name,
            initial: (self: Resource) => self.id.value,
          })
          name!: string
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // then
        expect(instance.name).toEqual(instance.id.value)
        expect(dataset.toCanonical()).toMatchSnapshot()
      })
    })
  })
})
