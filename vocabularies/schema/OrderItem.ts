import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface OrderItem extends Schema.Intangible, RdfResource {
  orderDelivery: Schema.ParcelDelivery;
  orderedItem: OrderItem | Schema.Product | Schema.Service;
  orderItemNumber: string;
  orderItemStatus: Schema.OrderStatus;
  orderQuantity: number;
}

export default function OrderItemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrderItemClass extends IntangibleMixin(Resource) implements OrderItem {
    @property.resource()
    orderDelivery!: Schema.ParcelDelivery;
    @property.resource()
    orderedItem!: OrderItem | Schema.Product | Schema.Service;
    @property.literal()
    orderItemNumber!: string;
    @property()
    orderItemStatus!: Schema.OrderStatus;
    @property.literal({ type: Number })
    orderQuantity!: number;
  }
  return OrderItemClass
}

class OrderItemImpl extends OrderItemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrderItem>) {
    super(arg, init)
    this.types.add(schema.OrderItem)
  }
}
OrderItemMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OrderItem)
OrderItemMixin.Class = OrderItemImpl
