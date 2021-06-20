import cf, { GraphPointer } from 'clownface'
import $rdf from 'rdf-ext'
import DatasetExt from 'rdf-ext/lib/Dataset'
import type { NamedNode } from '@rdfjs/types'
import namespace from '@rdfjs/namespace'
import Parser from '@rdfjs/parser-n3'
import { fromPointer } from '../lib/Class'
import { hydra } from '@tpluscode/rdf-ns-builders'
import * as graphs from './Class-spec-graphs'

const parser = new Parser()
const vocab = namespace('http://example.com/vocab#')

describe('Class', () => {
  let hydraClassNode: GraphPointer<NamedNode>
  let dataset: DatasetExt

  beforeEach(() => {
    dataset = $rdf.dataset()
    hydraClassNode = cf({ dataset })
      .namedNode('http://example.com/vocab#SomeClass')
  })

  describe('getting operations', () => {
    it('should return operations', async () => {
      // then
      hydraClassNode.addOut(hydra.supportedOperation, hydraClassNode.blankNode())

      // when
      const clas = fromPointer(hydraClassNode)

      // then
      expect(clas.supportedOperation.length).toBe(1)
    })

    it('should return empty array if property is missing', () => {
      // when
      const clas = fromPointer(hydraClassNode)

      // then
      expect(clas.supportedOperation.length).toBe(0)
    })
  })

  describe('getting properties', () => {
    it('should return properties', () => {
      // given
      hydraClassNode.addOut(hydra.supportedProperty, hydraClassNode.blankNode())

      // when
      const clas = fromPointer(hydraClassNode)

      // then
      expect(clas.supportedProperty.length).toBe(1)
    })

    it('should return empty array if property is missing', () => {
      const clas = fromPointer(hydraClassNode)

      expect(clas.supportedProperty.length).toBe(0)
    })
  })
})
