import clownface from 'clownface'
import rdf from '@rdfjs/dataset'
import RDF from '@rdfjs/data-model'
import { schema } from '@tpluscode/rdf-ns-builders';
import { fromPointer } from '../lib/Order'

describe('Order', () => {
  describe('status', () => {
    it('should return a namedNode', () => {
      // given
      const dataset = rdf.dataset()
      const graph = clownface({ dataset, term: RDF.namedNode('http://example.com/order') })
        .addOut(schema.orderStatus, schema.OrderCancelled)

      // when
      const order = fromPointer(graph)

      // then
      expect(order.orderStatus?.termType).toEqual('NamedNode')
    })
  })
})
