import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface OrderItem extends Schema.Intangible, RdfResource {
  orderDelivery: Schema.ParcelDelivery | undefined;
  orderedItem: Schema.OrderItem | Schema.Product | Schema.Service | undefined;
  orderItemNumber: string | undefined;
  orderItemStatus: Schema.OrderStatus | undefined;
  orderQuantity: number | undefined;
}

export function OrderItemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrderItemClass extends IntangibleMixin(Resource) implements OrderItem {
    @property.resource()
    orderDelivery: Schema.ParcelDelivery | undefined;
    @property.resource()
    orderedItem: Schema.OrderItem | Schema.Product | Schema.Service | undefined;
    @property.literal()
    orderItemNumber: string | undefined;
    @property()
    orderItemStatus: Schema.OrderStatus | undefined;
    @property.literal({ type: Number })
    orderQuantity: number | undefined;
  }
  return OrderItemClass
}

class OrderItemImpl extends OrderItemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrderItem>) {
    super(arg, init)
    this.types.add(schema.OrderItem)
  }

  static readonly __mixins: Mixin[] = [OrderItemMixin, IntangibleMixin];
}
OrderItemMixin.appliesTo = schema.OrderItem
OrderItemMixin.Class = OrderItemImpl
