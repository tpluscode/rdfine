import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface OrderItem<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  orderDelivery: Schema.ParcelDelivery<D> | undefined;
  orderedItem: Schema.OrderItem<D> | Schema.Product<D> | Schema.Service<D> | undefined;
  orderItemNumber: string | undefined;
  orderItemStatus: Schema.OrderStatus | undefined;
  orderQuantity: number | undefined;
}

export function OrderItemMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OrderItem & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OrderItemClass extends IntangibleMixin(Resource) {
    @rdfine.property.resource()
    orderDelivery: Schema.ParcelDelivery | undefined;
    @rdfine.property.resource()
    orderedItem: Schema.OrderItem | Schema.Product | Schema.Service | undefined;
    @rdfine.property.literal()
    orderItemNumber: string | undefined;
    @rdfine.property()
    orderItemStatus: Schema.OrderStatus | undefined;
    @rdfine.property.literal({ type: Number })
    orderQuantity: number | undefined;
  }
  return OrderItemClass as any
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

export const fromPointer = createFactory<OrderItem>([IntangibleMixin, OrderItemMixin], { types: [schema.OrderItem] });
