import rdf from '@rdfjs/dataset'
import { OrderMixin } from '@rdfine/schema/lib/Order'
import type * as Schema from '@rdfine/schema'
import RDF from '@rdfjs/data-model'
import OrderStatus from '@rdfine/schema/lib/OrderStatus'
import { turtle } from '@tpluscode/rdf-string'
import cf from 'clownface'

const dataset = rdf.dataset()
const order: Schema.Order = new OrderMixin.Class(cf({
  dataset,
  term: RDF.namedNode('http://example.com/store/order/1'),
}))
order.orderStatus = OrderStatus.OrderDelivered

console.log(turtle`${dataset}`.toString())
