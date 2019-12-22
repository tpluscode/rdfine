import { prefixes } from '@zazuko/rdf-vocabularies'
import cf from 'clownface'
import { namespace, property } from '..'
import RdfResource from '../lib/RdfResource'
import { parse, vocabs } from './_helpers'
import { Literal, NamedNode, Term } from 'rdf-js'
import { literal } from 'rdf-data-model'

const { ex, foaf, schema, rdf } = vocabs

describe('decorator', () => {
  describe('term', () => {
    describe('getter', () => {
      it('returns raw named node from property', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .

          ex:res foaf:friend ex:friend .`)
        class Resource extends RdfResource {
          @property({ path: foaf.friend })
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

      it('returns raw blank node from property', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res ex:likes [
            a ex:Blank
          ] .
        `)
        class Resource extends RdfResource {
          @property({ path: ex.likes })
          likes?: Term
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // then
        expect(instance.likes!.termType).toEqual('BlankNode')
      })

      it('returns raw literal node from property', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res foaf:name "John Doe"@en-us .
        `)
        class Resource extends RdfResource {
          @property({ path: foaf.name })
          name?: Literal
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })
        const name = instance.name

        // then
        expect(name!.value).toEqual('John Doe')
        expect(name!.language).toEqual('en-us')
      })

      it('throws for multiple values', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res schema:children ex:Hansel, ex:Gretel .
        `)
        class Resource extends RdfResource {
          @property({ path: schema.children })
          children?: Literal
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // then
        expect(() => instance.children).toThrow()
      })

      it('return array when annotated', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res schema:children ex:Hansel, ex:Gretel .
        `)
        class Resource extends RdfResource {
          @property({ path: schema.children, array: true })
          children?: Term[]
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // then
        expect(instance.children).toHaveLength(2)
        expect(instance.children!.map(c => c.value)).toContain(ex.Hansel.value)
        expect(instance.children!.map(c => c.value)).toContain(ex.Gretel.value)
      })

      it('return correct node when annotated with namespace, using prop name', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .

          ex:res foaf:friend ex:friend .`)

        @namespace(foaf)
        class Resource extends RdfResource {
          @property()
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

      it('get resource by paths of arbitrary length', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .

          ex:res foaf:friend ex:friend .
          ex:friend ex:worksAt ex:factory .
          ex:factory foaf:name "RDF Software House" .`)

        @namespace(foaf)
        class Resource extends RdfResource {
          @property({
            path: [
              'friend',
              'http://example.com/worksAt',
              foaf.name,
            ],
          })
          friendsWorkplaceName?: Literal
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // then
        expect(instance.friendsWorkplaceName!.value).toEqual('RDF Software House')
      })

      it('return correct node when annotated with namespace', async () => {
      // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .

          ex:res foaf:friend ex:friend .`)

        @namespace(foaf)
        class Resource extends RdfResource {
          @property({ path: 'friend' })
          colleague?: NamedNode
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })
        const friend = instance.colleague

        // then
        expect(friend!.value).toEqual(ex.friend.value)
      })
    })

    describe('setter', () => {
      it('can replace literal with blank', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res foaf:name "John Doe"@en-us .
          [
            a ex:BlankNodeName ;
            ex:first "John" ;
            ex:last "Doe"
          ] .
        `)
        class Resource extends RdfResource {
          @property({ path: foaf.name })
          name?: Term | null
        }

        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // when
        instance.name = cf({ dataset }).has(rdf.type, ex.BlankNodeName).term

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('can set empty array, removing objects', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res foaf:name "John"@en-us, "Johann"@de, "Jan"@pl, "Jean"@fr .
        `)
        class Resource extends RdfResource {
          @property({ path: foaf.name, array: true })
          name?: Term[]
        }

        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // when
        instance.name = []

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('can set array', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res foaf:name "John"@en-us, "Johann"@de .
        `)
        class Resource extends RdfResource {
          @property({ path: foaf.name, array: true })
          name?: Term[]
        }

        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // when
        instance.name = [
          literal('Jan', 'pl'),
          literal('Jean', 'fr'),
        ]

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('throws when setting array to non-array getter', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res foaf:name "John"@en-us, "Johann"@de, "Jan"@pl, "Jean"@fr .
        `)
        class Resource extends RdfResource {
          @property({ path: foaf.name })
          name?: any
        }

        const instance = new Resource({
          dataset,
          term: ex.res,
        })

        // when
        const setArray = () => { instance.name = [] }

        // then
        expect(setArray).toThrow()
      })

      it('sets value at paths of arbitrary length', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .

          ex:res foaf:friend ex:friend .
          ex:friend ex:worksAt ex:factory .
          ex:factory foaf:name "RDF Software House" .`)

        @namespace(foaf)
        class Resource extends RdfResource {
          @property({
            path: [
              'friend',
              'http://example.com/worksAt',
              foaf.name,
            ],
          })
          friendsWorkplaceName?: Literal
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })
        instance.friendsWorkplaceName = literal('Google')

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })
    })
  })
})
