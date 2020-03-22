import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.OrderAction)
  }
}
OrderActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OrderAction)
OrderActionMixin.Class = OrderActionImpl
