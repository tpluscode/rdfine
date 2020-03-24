import clownface from 'clownface'
import rdf from '@rdfjs/dataset'
import { namedNode } from '@rdfjs/data-model'
import { schema } from '@tpluscode/rdf-ns-builders';
import Order from '../Order'

describe('Order', () => {
  describe('status', () => {
    it('should return a namedNode', () => {
      // given
      const dataset = rdf.dataset()
      const graph = clownface({ dataset, term: namedNode('http://example.com/order') })
        .addOut(schema.orderStatus, schema.OrderCancelled)

      // when
      const order = new Order.Class(graph)

      // then
      expect(order.orderStatus.termType).toEqual('NamedNode')
    })
  })
})
