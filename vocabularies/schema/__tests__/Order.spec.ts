import clownface from 'clownface'
import rdf from '@rdfjs/dataset'
import RDF from '@rdfjs/data-model'
import { schema } from '@tpluscode/rdf-ns-builders';
import { OrderMixin } from '../Order'

describe('Order', () => {
  describe('status', () => {
    it('should return a namedNode', () => {
      // given
      const dataset = rdf.dataset()
      const graph = clownface({ dataset, term: RDF.namedNode('http://example.com/order') })
        .addOut(schema.orderStatus, schema.OrderCancelled)

      // when
      const order = new OrderMixin.Class(graph)

      // then
      expect(order.orderStatus?.termType).toEqual('NamedNode')
    })
  })
})
