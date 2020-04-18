import cf from 'clownface'
import $rdf from 'rdf-ext'
import { defaultGraph, namedNode, literal, blankNode } from '@rdfjs/data-model'
import RdfResource, { Initializer } from '../RdfResource'
import { parse, vocabs } from './_helpers'
import { property } from '../index'

const { ex } = vocabs

describe('RdfResource', () => {
  describe('constructor', () => {
    it('throws when node is literal', () => {
      expect(() => {
        const node = cf({ dataset: $rdf.dataset() }).literal('foo')

        return new RdfResource(node)
      }).toThrow()
    })

    it('throws when context represents multiple nodes', () => {
      expect(() => {
        const node = cf({
          dataset: $rdf.dataset(),
          term: [$rdf.blankNode(), $rdf.blankNode()],
        })

        return new RdfResource(node as any)
      }).toThrow()
    })
  })

  describe('equals', () => {
    it('compares id term', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).namedNode('urn:foo:bar')
      const left = new RdfResource(node)
      const right = new RdfResource(node)

      // when
      const areEqual = left.equals(right)

      // then
      expect(areEqual).toBe(true)
    })

    it('returns false if other resource is falsy', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).namedNode('urn:foo:bar')
      const left = new RdfResource(node)

      // when
      const areEqual = left.equals(null)

      // then
      expect(areEqual).toBe(false)
    })
  })

  describe('_graphId', () => {
    it('returns the clownface context graph', () => {
      // given
      const node = cf({ dataset: $rdf.dataset(), graph: ex.graph }).blankNode()

      // when
      const res = new RdfResource(node)

      // then
      expect(res._graphId.equals(ex.graph))
    })

    it('is default graph when not initialized explicitly', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()

      // when
      const res = new RdfResource(node)

      // then
      expect(res._graphId.equals(defaultGraph()))
    })
  })

  describe('types', () => {
    it('returns an iterable set of resource\'s types', async () => {
      // given
      const dataset = await parse(`
        @prefix ex: <${ex().value}> .
        
        ex:res a ex:Type1, ex:Type2, ex:Type3, ex:Type4 .
      `)
      const node = cf({
        dataset,
      }).namedNode(ex.res)

      // when
      const tc = new RdfResource(node).types

      // then
      expect([...tc.values()].map(r => r.id)).toEqual(
        expect.arrayContaining([
          ex.Type1, ex.Type2, ex.Type3, ex.Type4,
        ]),
      )
    })
  })

  describe('initializeProperties', () => {
    it('skips id', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        name: string
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.literal({ path: ex.name })
        name!: string;
      }

      // when
      const resource = new ResourceImpl(node, {
        id: ex.Foo,
        name: 'baz',
      })

      // then
      expect(resource.name).toEqual('baz')
      expect(resource.id.termType).toEqual('BlankNode')
      expect(resource.types.size).toEqual(0)
    })

    it('allows RDF/JS literal to initialize literal properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        name: string
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.literal({ path: ex.name })
        name!: string;
      }
      const initializer: Initializer<Resource> = {
        name: literal('baz'),
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.name).toEqual('baz')
    })

    it('allows RDF/JS named node to initialize resource properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        other: Resource
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.resource({ path: ex.other })
        other!: Resource;
      }
      const initializer: Initializer<Resource> = {
        other: namedNode('baz'),
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.other.id).toEqual(namedNode('baz'))
    })

    it('allows RDF/JS blank node to initialize resource properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        other: Resource
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.resource({ path: ex.other })
        other!: Resource;
      }
      const initializer: Initializer<Resource> = {
        other: blankNode(),
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.other.id.termType).toEqual('BlankNode')
    })

    it('allows RDF/JS nodes to initialize array resource properties', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        others: Resource[]
      }
      class ResourceImpl extends RdfResource implements Resource {
        @property.resource({ path: ex.other, values: 'array' })
        others!: Resource[];
      }
      const initializer: Initializer<Resource> = {
        others: [blankNode(), namedNode('baz')],
      }

      // when
      const resource = new ResourceImpl(node, initializer)

      // then
      expect(resource.others.map(o => o.id)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ termType: 'BlankNode' }),
          namedNode('baz'),
        ]),
      )
    })

    it('add additional types', () => {
      // given
      const node = cf({ dataset: $rdf.dataset() }).blankNode()
      interface Resource extends RdfResource {
        name: string
      }
      class ResourceImpl extends RdfResource implements Resource {
        name!: string;
      }

      // when
      const resource = new ResourceImpl(node, {
        types: [ex.Bar],
      })

      // then
      expect(resource.types.size).toEqual(1)
      expect([...resource.types][0].id.value).toEqual(ex.Bar.value)
    })
  })
})
