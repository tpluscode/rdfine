import rdf from '@rdfjs/dataset'
import Order from '@rdfine/schema/Order'
import type * as Schema from '@rdfine/schema'
import { namedNode } from '@rdfjs/data-model'
import OrderStatus from '@rdfine/schema/OrderStatus'
import { turtle } from '@tpluscode/rdf-string'

const dataset = rdf.dataset()
const order: Schema.Order = new Order.Class({
  dataset,
  term: namedNode('http://example.com/store/order/1'),
})
order.orderStatus = OrderStatus.OrderDelivered

console.log(turtle`${dataset}`.toString())
