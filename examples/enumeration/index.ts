import type * as Schema from '@rdfine/schema'
import OrderStatus from '@rdfine/schema/lib/OrderStatus'
import { turtle } from '@tpluscode/rdf-string'
import { createEnv } from '@rdfine/env'
import { SchemaFactory } from '@rdfine/schema/Factory'

const environment = createEnv(SchemaFactory)

const order: Schema.Order = environment.rdfine.schema.Order(environment.clownface({
  term: environment.namedNode('http://example.com/store/order/1'),
}))
order.orderStatus = OrderStatus.OrderDelivered

console.log(turtle`${order.pointer.dataset}`.toString())
