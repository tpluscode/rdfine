import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import HowToItemMixin from './HowToItem';

export interface HowToSupply extends Schema.HowToItem, RdfResource {
  estimatedCost: Schema.MonetaryAmount;
  estimatedCostLiteral: string;
}

export default function HowToSupplyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToSupplyClass extends HowToItemMixin(Resource) implements HowToSupply {
    @property.resource()
    estimatedCost!: Schema.MonetaryAmount;
    @property.literal({ path: schema.estimatedCost })
    estimatedCostLiteral!: string;
  }
  return HowToSupplyClass
}

class HowToSupplyImpl extends HowToSupplyMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HowToSupply)
  }
}
HowToSupplyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowToSupply)
HowToSupplyMixin.Class = HowToSupplyImpl
