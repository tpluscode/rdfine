import { prefixes } from '@zazuko/rdf-vocabularies'
import { literal, resource, term } from '../lib/decorators'
import RdfResource from '../lib/RdfResource'
import { parse, vocabs } from './_helpers'
import { NamedNode } from 'rdf-js'

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
