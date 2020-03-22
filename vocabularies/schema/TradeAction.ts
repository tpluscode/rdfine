import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface TradeAction extends Schema.Action, RdfResource {
  price: number | string;
  priceCurrency: string;
  priceSpecification: Schema.PriceSpecification;
}

export default function TradeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TradeActionClass extends ActionMixin(Resource) implements TradeAction {
    @property.literal()
    price!: number | string;
    @property.literal()
    priceCurrency!: string;
    @property.resource()
    priceSpecification!: Schema.PriceSpecification;
  }
  return TradeActionClass
}

class TradeActionImpl extends TradeActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TradeAction)
  }
}
TradeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TradeAction)
TradeActionMixin.Class = TradeActionImpl
