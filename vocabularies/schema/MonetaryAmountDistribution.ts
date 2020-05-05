import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { QuantitativeValueDistributionMixin } from './QuantitativeValueDistribution';

export interface MonetaryAmountDistribution extends Schema.QuantitativeValueDistribution, RdfResource {
  currency: string;
}

export function MonetaryAmountDistributionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MonetaryAmountDistributionClass extends QuantitativeValueDistributionMixin(Resource) implements MonetaryAmountDistribution {
    @property.literal()
    currency!: string;
  }
  return MonetaryAmountDistributionClass
}

class MonetaryAmountDistributionImpl extends MonetaryAmountDistributionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MonetaryAmountDistribution>) {
    super(arg, init)
    this.types.add(schema.MonetaryAmountDistribution)
  }

  static readonly __mixins: Mixin[] = [MonetaryAmountDistributionMixin, QuantitativeValueDistributionMixin];
}
MonetaryAmountDistributionMixin.appliesTo = schema.MonetaryAmountDistribution
MonetaryAmountDistributionMixin.Class = MonetaryAmountDistributionImpl
