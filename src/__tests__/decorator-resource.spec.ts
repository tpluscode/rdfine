import { prefixes } from '@zazuko/rdf-vocabularies'
import cf, { SingleContextClownface } from 'clownface'
import { property, namespace } from '..'
import RdfResource from '../lib/RdfResource'
import { parse, vocabs } from './_helpers'
import { NamedNode, Term } from 'rdf-js'
import rdfExt from 'rdf-ext'

const { ex, foaf, schema, rdf } = vocabs

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
        const instance = new Resource({
          dataset,
          term: ex.res,
        })
        const friend = instance.friend

        // then
        expect(friend).toBeInstanceOf(RdfResource)
        expect(friend.id.value).toEqual(ex.friend.value)
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
        const instance = new Resource({
          dataset,
          term: ex.res,
        })
        const friend = instance.friend

        // then
        expect(friend).toBeInstanceOf(RdfResource)
        expect(friend.id.value).toEqual(ex.friend.value)
      })
    })

    describe('setter', () => {
      it('sets a relation between resources', async () => {
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
        const john = new Resource({ dataset, term: ex.john })
        const jane = new Resource({ dataset, term: ex.jane })

        // when
        john.spouse = jane

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
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
          @property.resource({ path: schema.spouse })
          spouse?: RdfResource | null
        }
        const john = new Resource({ dataset, term: ex.john })

        // when
        john.spouse = null

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('accepts raw named node term', async () => {
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
        const john = new Resource({ dataset, term: ex.john })

        // when
        john.spouse = ex.jane

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })

      it('accepts raw blank node term', async () => {
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
        const lois = new Resource({ dataset, term: ex.lois })

        // when
        lois.spouse = cf({ dataset }).has(rdf.type, ex.Superman).term

        // then
        expect(dataset.toCanonical()).toMatchSnapshot()
      })
    })

    describe('initial', () => {
      it('set object returned by factory function', async () => {
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
              const name = new NameResource(self._node.blankNode() as SingleContextClownface)
              name.first = 'John'
              name.last = 'Doe'
              name.person = self
              return name
            },
            as: [NameResource],
          })
          name!: NameResource
        }

        // when
        const instance = new Resource({
          dataset,
          term: ex.res,
        })
        const name = instance.name

        // then
        expect(name).toBeInstanceOf(RdfResource)
        expect(name.first).toEqual('John')
        expect(name.last).toEqual('Doe')
        expect(name.person.id.value).toEqual(instance.id.value)
        expect(dataset.toCanonical()).toMatchSnapshot()
      })
    })
  })
})
