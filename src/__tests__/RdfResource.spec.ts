import cf from 'clownface'
import $rdf from 'rdf-ext'
import { defaultGraph } from '@rdfjs/data-model'
import RdfResource from '../lib/RdfResource'
import { vocabs } from './_helpers'

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

        return new RdfResource(node)
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
})
