import cf, { GraphPointer } from 'clownface'
import $rdf from 'rdf-ext'
import type { NamedNode } from '@rdfjs/types'
import { hydra } from '@tpluscode/rdf-ns-builders'
import { fromPointer } from '../lib/Collection.js'
import { expect } from 'chai';

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
      const collection = fromPointer(collectionNode)

      // then
      expect(Array.isArray(collection.member)).to.eq(true)
      expect(collection.member[0]).to.have.property(['http://example.com/text', 'value'], 'hello')
    })
  })

  describe('views', () => {
    it('should return empty array when views are missing', () => {
      // given
      const collection = fromPointer(collectionNode)

      // then
      expect(Array.isArray(collection.view)).to.eq(true)
      expect(collection.view.length).to.eq(0)
    })
  })

  describe('manages', () => {
    it('should return array', () => {
      // given
      collectionNode.addOut(hydra.manages, collectionNode.blankNode())
      const collection = fromPointer(collectionNode)

      // then
      expect(collection.manages).to.have.length(1)
    })
  })

  describe('memberAssertion', () => {
    it('should return array even for one element', () => {
      // given
      collectionNode.addOut(hydra.memberAssertion, collectionNode.blankNode())
      const collection = fromPointer(collectionNode)

      // then
      expect(Array.isArray(collection.memberAssertion)).to.eq(true)
    })
  })

  describe('totalItems', () => {
    it('returns the value of the hydra property', () => {
      // given
      collectionNode.addOut(hydra.totalItems, 167)
      const collection = fromPointer(collectionNode)

      // then
      expect(collection.totalItems).to.eq(167)
    })
  })
})
