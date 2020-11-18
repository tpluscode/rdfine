import cf, { GraphPointer } from 'clownface'
import $rdf from 'rdf-ext'
import { NamedNode } from 'rdf-js'
import { hydra } from '@tpluscode/rdf-ns-builders'
import { literal } from '@rdfjs/data-model';
import { CollectionMixin } from '../lib/Collection'

describe('Collection', () => {
  let collectionNode: GraphPointer<NamedNode>

  beforeEach(() => {
    collectionNode = cf({ dataset: $rdf.dataset() })
      .namedNode('http://example.com/vocab#Collection')
  })

  describe('members', () => {
    it('should return array even for one member', () => {
      // given
      collectionNode
        .addOut(hydra.member, m => {
          m.addOut(collectionNode.namedNode('http://example.com/text'), 'hello')
        })
      const collection = new CollectionMixin.Class(collectionNode)

      // then
      expect(Array.isArray(collection.member)).toBe(true)
      expect(collection.member[0]).toHaveProperty(['http://example.com/text', 'value'], 'hello')
    })
  })

  describe('views', () => {
    it('should return empty array when views are missing', () => {
      // given
      const collection = new CollectionMixin.Class(collectionNode)

      // then
      expect(Array.isArray(collection.view)).toBe(true)
      expect(collection.view.length).toBe(0)
    })
  })

  describe('manages', () => {
    it('should return array even for one element', () => {
      // given
      collectionNode.addOut(hydra.manages, collectionNode.blankNode())
      const collection = new CollectionMixin.Class(collectionNode)

      // then
      expect(Array.isArray(collection.manages)).toBe(true)
    })
  })

  describe('totalItems', () => {
    it('returns the value of the hydra property', () => {
      // given
      collectionNode.addOut(hydra.totalItems, 167)
      const collection = new CollectionMixin.Class(collectionNode)

      // then
      expect(collection.totalItems).toBe(167)
    })
  })
})
