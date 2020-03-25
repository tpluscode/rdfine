import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TradeActionMixin from './TradeAction';

export interface OrderAction extends Schema.TradeAction, RdfResource {
  deliveryMethod: Schema.DeliveryMethod;
}

export default function OrderActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrderActionClass extends TradeActionMixin(Resource) implements OrderAction {
    @property()
    deliveryMethod!: Schema.DeliveryMethod;
  }
  return OrderActionClass
}

class OrderActionImpl extends OrderActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrderAction>) {
    super(arg, init)
    this.types.add(schema.OrderAction)
  }
}
OrderActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OrderAction)
OrderActionMixin.Class = OrderActionImpl
