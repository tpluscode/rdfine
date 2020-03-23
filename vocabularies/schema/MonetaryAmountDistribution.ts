import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import QuantitativeValueDistributionMixin from './QuantitativeValueDistribution';

export interface MonetaryAmountDistribution extends Schema.QuantitativeValueDistribution, RdfResource {
  currency: string;
}

export default function MonetaryAmountDistributionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MonetaryAmountDistributionClass extends QuantitativeValueDistributionMixin(Resource) implements MonetaryAmountDistribution {
    @property.literal()
    currency!: string;
  }
  return MonetaryAmountDistributionClass
}

class MonetaryAmountDistributionImpl extends MonetaryAmountDistributionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MonetaryAmountDistribution)
  }
}
MonetaryAmountDistributionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MonetaryAmountDistribution)
MonetaryAmountDistributionMixin.Class = MonetaryAmountDistributionImpl
