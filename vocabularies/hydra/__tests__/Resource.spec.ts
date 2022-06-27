import cf, { GraphPointer } from 'clownface'
import $rdf from 'rdf-ext'
import DatasetExt from 'rdf-ext/lib/Dataset'
import type { NamedNode } from '@rdfjs/types'
import { fromPointer } from '../lib/Resource'
import { hydra } from '@tpluscode/rdf-ns-builders'

describe('Resource', () => {
  let hydraResourceNode: GraphPointer<NamedNode>
  let dataset: DatasetExt

  beforeEach(() => {
    dataset = $rdf.dataset()
    hydraResourceNode = cf({ dataset })
      .namedNode('http://example.com/vocab#SomeClass')
  })

  describe('collection', () => {
    it('should return its objects', async () => {
      // then
      hydraResourceNode.addOut(hydra.collection, hydraResourceNode.namedNode('http://example.com/c'))

      // when
      const resource = fromPointer(hydraResourceNode)

      // then
      expect(resource.collection.length).toBe(1)
      expect(resource.collection[0].id.value).toBe('http://example.com/c')
    })
  })
})
