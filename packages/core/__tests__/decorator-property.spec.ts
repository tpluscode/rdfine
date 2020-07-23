import { prefixes } from '@zazuko/rdf-vocabularies'
import cf from 'clownface'
import { namespace, property, crossBoundaries } from '../index'
import RdfResource from '../RdfResource'
import { parse, vocabs } from './_helpers'
import { DatasetCore, DefaultGraph, Literal, NamedNode, Term } from 'rdf-js'
import * as RDF from '@rdf-esm/data-model'
import rdfExt from 'rdf-ext'
import DatasetExt from 'rdf-ext/lib/Dataset'

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
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
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
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

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
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
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
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(() => instance.children).toThrow()
      })

      it('does not throw for multiple values when allowed', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res schema:children ex:Hansel, ex:Gretel .
        `)
        class Resource extends RdfResource {
          @property({ path: schema.children, values: ['single', 'array'] })
          children?: Literal | Literal[]
        }

        // when
        const { children } = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(children).toBeInstanceOf(Array)
      })

      it('return array when annotated', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res schema:children ex:Hansel, ex:Gretel .
        `)
        class Resource extends RdfResource {
          @property({ path: schema.children, values: 'array' })
          children?: Term[]
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

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
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
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
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

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
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
        const friend = instance.colleague

        // then
        expect(friend!.value).toEqual(ex.friend.value)
      })

      it('strict throws when object not found', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property({ path: foaf.name, strict: true })
          name!: Literal
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
        const getName = () => instance.name

        // then
        expect(getName).toThrow()
      })

      it('strict can be initialized', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property.literal({ path: foaf.name, strict: true, initial: 'bar' })
          foo!: string
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.foo).toEqual('bar')
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('array can be initialized', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property.literal({ path: foaf.name, values: 'array', initial: 'bar' })
          foo!: string
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.foo).toEqual(
          expect.arrayContaining(['bar']),
        )
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('array can be initialized with multiple values', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property.literal({ path: foaf.name, values: 'array', initial: ['foo', 'bar'] })
          foo!: string
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.foo).toEqual(
          expect.arrayContaining(['foo', 'bar']),
        )
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('rdf list can be initialized', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property.literal({ path: foaf.name, values: 'list', initial: 'bar' })
          foo!: string
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.foo).toEqual(
          expect.arrayContaining(['bar']),
        )
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('rdf list can be initialized with multiple values', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property.literal({ path: foaf.name, values: 'list', initial: ['foo', 'bar'] })
          foo!: string
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.foo).toEqual(
          expect.arrayContaining(['foo', 'bar']),
        )
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('returns rdf list array', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res ex:letters ( "a" "b" "c" ) .
        `)
        class Resource extends RdfResource {
          @property({ path: ex.letters, values: 'list' })
          letters!: Literal[]
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.letters.map(l => l.value)).toEqual(['a', 'b', 'c'])
      })

      it('returns empty rdf list array', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:res ex:letters ( ) .
        `)
        class Resource extends RdfResource {
          @property({ path: ex.letters, values: 'list' })
          letters!: Literal[]
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.letters).toEqual([])
      })

      it('throws when rdf list is the object but not annotated', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:res foaf:knows ( ex:Will ex:Joe ex:Sindy ) .
        `)
        class Resource extends RdfResource {
          @property({ path: foaf.knows })
          friend!: Term
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(() => instance.friend).toThrow()
      })

      it('does not throw when rdf list is allowed', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:res foaf:knows ( ex:Will ex:Joe ex:Sindy ) .
        `)
        class Resource extends RdfResource {
          @property({ path: foaf.knows, values: ['single', 'list'] })
          friends!: Term | Term[]
        }

        // when
        const { friends } = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(friends).toBeInstanceOf(Array)
      })

      it('returns list elements when allowed values are array or list', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:res foaf:knows ( ex:Will ex:Joe ex:Sindy ) .
        `)
        class Resource extends RdfResource {
          @property({ path: foaf.knows, values: ['list', 'array'] })
          friends!: Term[]
        }

        // when
        const { friends } = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(friends.length).toBe(3)
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

        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

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
          @property({ path: foaf.name, values: 'array' })
          name?: Term[]
        }

        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

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
          @property({ path: foaf.name, values: 'array' })
          name?: Term[]
        }

        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // when
        instance.name = [
          RDF.literal('Jan', 'pl'),
          RDF.literal('Jean', 'fr'),
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

        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

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
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
        instance.friendsWorkplaceName = RDF.literal('Google')

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('sets nil for empty rdf list', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:res foaf:knows ( ex:Will ex:Joe ex:Sindy ) .
        `)
        class Resource extends RdfResource {
          @property({ path: foaf.knows, values: 'list' })
          friend!: Term[]
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
        instance.friend = []

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('setting null to rdf list removes triple', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:res foaf:knows ( ex:Will ex:Joe ex:Sindy ) .
        `)
        class Resource extends RdfResource {
          @property({ path: foaf.knows, values: 'array' })
          friend!: Term[] | null
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
        instance.friend = null

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })
    })

    describe('initial', () => {
      it('sets initial value from node', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property({
            path: schema.name,
            initial: RDF.literal('foo'),
          })
          name!: Literal
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.name.value).toEqual('foo')
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('sets initial value from clownface object', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property({
            path: schema.name,
            initial: (self: Resource) => self.pointer.blankNode('foo'),
          })
          name!: Literal
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.name.value).toEqual('foo')
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('sets initial value from function', async () => {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property({
            path: schema.name,
            initial: (self: Resource) => RDF.namedNode(`${self.id.value}/child`),
          })
          child!: NamedNode
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.child.value).toEqual('http://example.com/res/child')
        expect(dataset.toCanonical()).toMatchSnapshot()
      })
    })

    describe('over multiple graphs', () => {
      class Resource<D extends DatasetCore> extends RdfResource<D> {
        @property({ path: foaf.knows })
        friend!: Term

        @property({
          path: crossBoundaries(foaf.knows),
        })
        allFriendsAcross!: Term[]

        @property(({
          path: foaf.knows,
          subjectFromAllGraphs: true,
        }))
        allKnownFriends!: Term[]
      }

      function namedGraphTests(newResource: (dataset: DatasetExt, term: NamedNode, graph?: NamedNode | DefaultGraph) => Resource<DatasetExt>) {
        describe('getter', () => {
          it('returns value from same graph', async () => {
            // given
            const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              
              ex:John foaf:knows ex:Will ex:John .
              ex:John foaf:knows ex:Sindy ex:Sindy .
              ex:John foaf:knows ex:Brad .
            `)

            // when
            const instance = newResource(dataset, ex.John, ex.John)

            // then
            expect(instance.allKnownFriends).toEqual(
              expect.arrayContaining([ex.Will, ex.Sindy, ex.Brad]),
            )
          })

          it('returns self when dataset is empty', async () => {
            // given
            const dataset = rdfExt.dataset()

            // when
            const instance = newResource(dataset, ex.John)

            // then
            expect(instance.allKnownFriends).toEqual([])
          })

          it('returns value from default graph if unspecified', async () => {
            // given
            const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              
              ex:John foaf:knows ex:Will ex:John .
              ex:John foaf:knows ex:Sindy ex:Sindy .
              ex:John foaf:knows ex:Brad .
            `)

            // when
            const instance = newResource(dataset, ex.John)

            // then
            expect(instance.friend.value).toEqual(ex.Brad.value)
          })

          it('ignores crossingBoundaries option', async () => {
            // given
            const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              
              ex:John foaf:knows ex:Will ex:John .
              ex:John foaf:knows ex:Will ex:Sindy .
              ex:John foaf:knows ex:Will .
            `)

            // when
            const instance = newResource(dataset, ex.John, ex.John)

            // then
            expect(instance.allFriendsAcross).toHaveLength(1)
          })

          it('de-duplicates terms', async () => {
            // given
            const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              
              ex:John foaf:knows ex:Will ex:John .
              ex:John foaf:knows ex:Will ex:Sindy .
              ex:John foaf:knows ex:Will .
            `)

            // when
            const instance = newResource(dataset, ex.John, ex.John)

            // then
            expect(instance.allKnownFriends).toHaveLength(1)
          })
        })

        describe('setter', () => {
          it('sets value to same graph', async () => {
            // given
            const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              
              ex:John foaf:knows ex:Will ex:John .
              ex:John foaf:knows ex:Sindy ex:Sindy .
              ex:John foaf:knows ex:Brad .
            `)
            const instance = newResource(dataset, ex.John, ex.John)

            // when
            instance.friend = ex.Holly

            // then
            expect(instance.unionGraphPointer.dataset.toCanonical()).toMatchSnapshot()
          })

          it('sets value to default graph if unspecified', async () => {
            // given
            const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              
              ex:John foaf:knows ex:Will ex:John .
              ex:John foaf:knows ex:Sindy ex:Sindy .
              ex:John foaf:knows ex:Brad .
            `)
            const instance = newResource(dataset, ex.John)

            // when
            instance.friend = ex.Holly

            // then
            expect(instance.unionGraphPointer.dataset.toCanonical()).toMatchSnapshot()
          })
        })

        describe('initial', () => {
          it('sets initial values in self graph', () => {
            // given
            const dataset = rdfExt.dataset()
            const instance = newResource(dataset, ex.John, ex.John)

            // when
            instance.friend = ex.Holly

            // then
            expect(instance.unionGraphPointer.dataset.toCanonical()).toMatchSnapshot()
          })
        })
      }

      describe('constructed from clownface graph', () => {
        namedGraphTests((dataset, term, graph) => {
          return new Resource(cf({ dataset, term, graph }))
        })
      })
    })
  })
})
