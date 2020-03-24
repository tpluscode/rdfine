import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface QuantitativeValueDistribution extends Schema.StructuredValue, RdfResource {
  duration: Schema.Duration;
  median: number;
  percentile10: number;
  percentile25: number;
  percentile75: number;
  percentile90: number;
}

export default function QuantitativeValueDistributionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QuantitativeValueDistributionClass extends StructuredValueMixin(Resource) implements QuantitativeValueDistribution {
    @property.resource()
    duration!: Schema.Duration;
    @property.literal({ type: Number })
    median!: number;
    @property.literal({ type: Number })
    percentile10!: number;
    @property.literal({ type: Number })
    percentile25!: number;
    @property.literal({ type: Number })
    percentile75!: number;
    @property.literal({ type: Number })
    percentile90!: number;
  }
  return QuantitativeValueDistributionClass
}

class QuantitativeValueDistributionImpl extends QuantitativeValueDistributionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.QuantitativeValueDistribution)
  }
}
QuantitativeValueDistributionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.QuantitativeValueDistribution)
QuantitativeValueDistributionMixin.Class = QuantitativeValueDistributionImpl
