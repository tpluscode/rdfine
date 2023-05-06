/* eslint-disable no-use-before-define */
import { expect } from 'chai'
import prefixes from '@zazuko/prefixes'
import cf, { GraphPointer } from 'clownface'
import type { DatasetCore, Literal, NamedNode, Term } from '@rdfjs/types'
import rdfExt from 'rdf-ext'
import { turtle } from '@tpluscode/rdf-string'
import { foaf, schema, rdf } from '@tpluscode/rdf-ns-builders/loose'
import {
  property,
  namespace,
  crossBoundaries,
  Constructor,
  RdfResource as IRdfResource,
} from '../index.js'
import RdfResource, { fromObject } from '../RdfResource.js'
import ResourceFactoryImpl from '../lib/ResourceFactory.js'
import { parse, ex } from './_helpers/index.js'

describe('decorator', () => {
  describe('resource', () => {
    describe('getter', () => {
      it('returns a resource object using path predicate', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:res foaf:friend ex:friend .
        `)

        class Resource extends RdfResource {
          @property.resource({ path: foaf.friend })
            friend!: RdfResource
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
        const friend = instance.friend

        // then
        expect(friend).to.be.instanceOf(RdfResource)
        expect(friend.id.value).to.eq(ex.friend.value)
      })

      it('can be used with namespace decorator', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:res foaf:friend ex:friend .
        `)

        @namespace(foaf)
        class Resource extends RdfResource {
          @property.resource()
            friend!: RdfResource
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
        const friend = instance.friend

        // then
        expect(friend).to.be.instanceOf(RdfResource)
        expect(friend.id.value).to.eq(ex.friend.value)
      })

      it('returns rdf list array', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:res foaf:knows ( ex:Will ex:Joe ex:Sindy ) .
        `)
        class Resource extends RdfResource {
          @property.resource({ path: foaf.knows, values: 'list' })
            friends!: RdfResource[]
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.friends.map(l => l.id.value)).to.eq([
          ex.Will.value,
          ex.Joe.value,
          ex.Sindy.value,
        ])
      })

      it('sets itself as parent of created resource', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:res foaf:friend ex:friend .
        `)

        @namespace(foaf)
        class Resource extends RdfResource {
          @property.resource()
            friend!: RdfResource
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
        const friend = instance.friend

        // then
        expect(friend._parent).to.eq(instance)
      })

      it('assert types implicitly added to decorator', async () => {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:res foaf:friend ex:friend .
        `)

        @namespace(foaf)
        class Resource extends RdfResource {
          @property.resource({ implicitTypes: [schema.Person, foaf.Person] })
            friend!: RdfResource
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
        const friend = instance.friend

        // then
        expect([...friend.types.values()].map(r => r.id)).to.deep.eq(
          [schema.Person, foaf.Person],
        )
      })
    })

    describe('setter', () => {
      it('sets a relation between resources', async function () {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:john a schema:Person .
          ex:jane a schema:Person .
        `)

        class Resource extends RdfResource {
          @property.resource({ path: schema.spouse })
            spouse?: RdfResource
        }
        const john = new Resource(cf({ dataset, term: ex.john }))
        const jane = new Resource(cf({ dataset, term: ex.jane }))

        // when
        john.spouse = jane

        // then
        expect(dataset.toCanonical()).to.matchSnapshot(this)
      })

      it('setting null removes relation', async function () {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:john a schema:Person .
          ex:jane a schema:Person .
          
          ex:john schema:spouse ex:jane .
        `)

        class Resource extends RdfResource {
          @property.resource({ path: schema.spouse })
            spouse?: RdfResource | null
        }
        const john = new Resource(cf({ dataset, term: ex.john }))

        // when
        john.spouse = null

        // then
        expect(dataset.toCanonical()).to.matchSnapshot(this)
      })

      it('accepts raw named node term', async function () {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:john a schema:Person .
          ex:jane a schema:Person .
        `)

        class Resource extends RdfResource {
          @property.resource({ path: schema.spouse })
            spouse?: RdfResource | NamedNode
        }
        const john = new Resource(cf({ dataset, term: ex.john }))

        // when
        john.spouse = ex.jane

        // then
        expect(dataset.toCanonical()).to.matchSnapshot(this)
      })

      it('accepts blank node context', async function () {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:john a schema:Person .
          ex:jane a schema:Person .
        `)

        class Resource extends RdfResource {
          @property.resource({ path: schema.spouse })
            spouse?: RdfResource | GraphPointer
        }
        const john = new Resource(cf({ dataset, term: ex.john }))

        // when
        john.spouse = john.pointer.blankNode()

        // then
        expect(dataset.toCanonical()).to.matchSnapshot(this)
      })

      it('sets array to rdf list property', async function () {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:john foaf:knows (
            ex:stacy
            ex:frank
          ) .
        `)

        class Resource extends RdfResource {
          @property.resource({ path: foaf.knows, values: 'list' })
            knows?: (RdfResource | NamedNode)[]
        }
        const john = new Resource(cf({ dataset, term: ex.john }))

        // when
        john.knows = [
          ex.jane,
          ex.joe,
        ]

        // then
        expect(dataset.toCanonical()).to.matchSnapshot(this)
      })

      it('sets array to set property', async function () {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix foaf: <${prefixes.foaf}> .
          
          ex:john foaf:knows ex:stacy, ex:frank .
        `)

        class Resource extends RdfResource {
          @property.resource({ path: foaf.knows, values: 'array' })
            knows?: (RdfResource | NamedNode)[]
        }
        const john = new Resource(cf({ dataset, term: ex.john }))

        // when
        john.knows = [
          ex.jane,
          ex.joe,
        ]

        // then
        expect(dataset.toCanonical()).to.matchSnapshot(this)
      })

      it('accepts raw blank node term', async function () {
        // given
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:lois a schema:Person .
          _:clark a ex:Superman .
        `)

        class Resource extends RdfResource {
          @property.resource({ path: schema.spouse })
            spouse?: RdfResource | Term
        }
        const lois = new Resource(cf({ dataset, term: ex.lois }))

        // when
        lois.spouse = cf({ dataset }).has(rdf.type, ex.Superman).term

        // then
        expect(dataset.toCanonical()).to.matchSnapshot(this)
      })

      it('accepts deep plain JS object', async function () {
        // given
        interface Person extends IRdfResource {
          knows: Person
          name: string
          parents: Person[]
        }
        const dataset = await parse(`
          @prefix ex: <${prefixes.ex}> .
          @prefix schema: <${prefixes.schema}> .
          
          ex:Lois a schema:Person .
        `)
        function Mixin<B extends Constructor>(base: B) {
          class Resource extends base implements Person {
            @property.resource({ path: schema.knows })
              knows!: Person

            @property.literal({ path: schema('name') })
              name!: string

            @property.resource({ path: schema.parent, values: 'array' })
              parents!: Person[]
          }
          return Resource
        }
        Mixin.shouldApply = () => true
        class TestResourceBase extends RdfResource {}
        TestResourceBase.factory = new ResourceFactoryImpl(TestResourceBase)
        TestResourceBase.factory.addMixin(Mixin)
        const lois = TestResourceBase.factory.createEntity<Person>(cf({ dataset, term: ex.Lois }))

        // when
        lois.knows = fromObject({
          id: ex.Superman,
          types: [schema.Person],
          name: 'Superman',
          parents: [{
            name: 'Jor-El',
          }, {
            name: 'Lara Lor-Van',
          }],
        })

        // then
        expect(dataset.toCanonical()).to.matchSnapshot(this)
      })
    })

    describe('initial', () => {
      it('set object returned by factory function', async function () {
        // given
        const dataset = rdfExt.dataset()
        @namespace('http://example.com/')
        class NameResource extends RdfResource {
          @property.literal()
            first!: string

          @property.literal()
            last!: string

          @property.resource()
            person!: RdfResource
        }
        class Resource extends RdfResource {
          @property.resource({
            path: foaf.friend,
            initial: (self: Resource) => {
              const name = new NameResource(self.pointer.blankNode())
              name.first = 'John'
              name.last = 'Doe'
              name.person = self
              return name
            },
            as: [NameResource],
          })
            name!: NameResource
        }
        Resource.factory = new ResourceFactoryImpl(RdfResource)

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))
        const name = instance.name

        // then
        expect(name).to.be.instanceOf(RdfResource)
        expect(name.first).to.eq('John')
        expect(name.last).to.eq('Doe')
        expect(name.person.id.value).to.eq(instance.id.value)
        expect(dataset.toCanonical()).to.matchSnapshot(this)
      })

      it('set by named node', async function () {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property.resource({
            path: schema.employee,
            initial: ex.Google,
          })
            employer!: RdfResource
        }

        // when
        const instance = new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(instance.employer.id).to.eq(ex.Google)
      })

      it('set object returned by factory function as clownface', async function () {
        // given
        const dataset = rdfExt.dataset()
        class Resource extends RdfResource {
          @property.resource({
            path: foaf.friend,
            initial: (self: Resource) => {
              return self.pointer.namedNode('http://example.com/friend')
            },
          })
            friend!: RdfResource
        }

        // when
        // eslint-disable-next-line no-new
        new Resource(cf({
          dataset,
          term: ex.res,
        }))

        // then
        expect(dataset.toCanonical()).to.matchSnapshot(this)
      })
    })

    describe('over multiple graphs', () => {
      class Resource<D extends DatasetCore> extends RdfResource<D> {
        @property.resource({ path: foaf.knows })
          friend!: this

        @property({ path: schema('name') })
          name?: Literal

        @property.resource({
          path: crossBoundaries(foaf.knows),
          as: [Resource],
        })
          allAboutFriends!: this[]

        @property.resource({
          path: crossBoundaries(foaf.knows),
          subjectFromAllGraphs: true,
          as: [Resource],
        })
          allAboutAllFriends!: this[]

        @property.resource({
          path: foaf.knows,
          subjectFromAllGraphs: true,
          as: [Resource],
        })
          allFriends!: this[]
      }
      beforeEach(() => {
        Resource.factory = new ResourceFactoryImpl(RdfResource)
      })

      describe('getter', () => {
        it('does not cross named graph boundary by default', async () => {
          // given
          const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              @prefix schema: <${prefixes.schema}> .
              
              ex:John foaf:knows ex:Will ex:John .
              
              ex:Will schema:name "William" ex:Will .
            `)

          // when
          const instance = new Resource(cf({ dataset, term: ex.John, graph: ex.John }))

          // then
          expect(instance.friend.name).to.be.undefined
        })

        it('crosses named graph boundary when explicitly annotated', async () => {
          // given
          const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              @prefix schema: <${prefixes.schema}> .
              
              ex:John foaf:knows ex:Will ex:John .
              
              ex:Will schema:name "William" ex:Will .
              ex:Will foaf:knows ex:John ex:Will .
            `)

          // when
          const instance = new Resource(cf({ dataset, term: ex.John, graph: ex.John }))

          // then
          expect(instance.allAboutFriends).to.have.length(2)
          const friends = instance.allAboutFriends
          expect(friends.map(will => will._graphId)).to.deep.eq(
            [ex.John, ex.Will],
          )
          expect(friends.map(will => will.name)).to.deep.eq(
            [rdfExt.literal('William')],
          )
        })

        it('when crossing named graph boundaries returns separate resource object for each named graph', async () => {
          // given
          const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              @prefix schema: <${prefixes.schema}> .
              
              ex:John foaf:knows ex:Will .
              
              ex:Will schema:name "William" ex:WillName .
              ex:Will foaf:knows ex:John ex:WillFriends .
              ex:Will schema:employee ex:Google ex:WillJob .
            `)

          // when
          const instance = new Resource(cf({ dataset, term: ex.John }))

          // then
          expect(instance.allAboutFriends).to.have.length(4)
          const wills = instance.allAboutFriends
          expect(wills.map(w => w._graphId)).to.deep.eq(
            [rdfExt.defaultGraph(), ex.WillName, ex.WillFriends, ex.WillJob],
          )
        })

        it('when crossing named graph boundaries does not merge subject from other graphs', async () => {
          // given
          const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              @prefix schema: <${prefixes.schema}> .
              
              ex:John foaf:knows ex:Will .
              ex:John foaf:knows ex:Sindy ex:JohnGraph .              
            `)

          // when
          const instance = new Resource(cf({ dataset, term: ex.John }))

          // then
          expect(instance.name).to.be.undefined
          expect(instance.allAboutFriends).to.have.length(1)
        })

        it('when crossing named graph boundaries can also merge subject from other graphs', async () => {
          // given
          const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              @prefix schema: <${prefixes.schema}> .
              
              ex:John foaf:knows ex:Will .
              ex:John schema:name "John Doe" ex:JohnGraph .
              ex:John foaf:knows ex:Sindy ex:JohnGraph .    
            `)

          // when
          const instance = new Resource(cf({ dataset, term: ex.John }))

          // then
          expect(instance.allAboutAllFriends).to.have.length(2)
        })

        it('when merging subjects, preserves the graph', async () => {
          // given
          const dataset = await parse(turtle`
              ${ex.John} a ${schema.Person} .
            
              ${ex.WillGraph} {
                ${ex.John} ${foaf.knows} ${ex.Will} .
                ${ex.Will} ${schema.name} "Will" .
              }
              
              ${ex.SindyGraph} {
                ${ex.John} ${foaf.knows} ${ex.Sindy} .
              }
              
              ${ex.UnreachableGraph} {
                ${ex.Sindy} ${schema.name} "Sindy" .
              }
            `)

          // when
          const instance = new Resource(cf({ dataset, term: ex.John }))
          const friendNames = instance.allFriends.map(friend => friend.name)

          // then
          expect(friendNames).to.deep.eq(
            [rdfExt.literal('Will'), undefined],
          )
        })
      })

      describe('setter', () => {
        it('assert link quad in subject\'s graph', async function () {
          // given
          const dataset = await parse(`
              @prefix ex: <${prefixes.ex}> .
              @prefix foaf: <${prefixes.foaf}> .
              @prefix schema: <${prefixes.schema}> .
              
              ex:John schema:name "John" ex:John .
              
              ex:Will schema:name "William" ex:Will .
            `)

          // when
          const john = new Resource(cf({ dataset, term: ex.John, graph: ex.John }))
          john.friend = new Resource(cf({ dataset, term: ex.Will, graph: ex.Will }))

          // then
          expect(dataset.toCanonical()).to.matchSnapshot(this)
        })
      })
    })
  })
})
