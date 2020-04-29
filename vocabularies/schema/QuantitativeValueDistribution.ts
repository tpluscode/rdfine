import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface QuantitativeValueDistribution extends Schema.StructuredValue, RdfResource {
  duration: Schema.Duration;
  median: number;
  percentile10: number;
  percentile25: number;
  percentile75: number;
  percentile90: number;
}

export function QuantitativeValueDistributionMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<QuantitativeValueDistribution>) {
    super(arg, init)
    this.types.add(schema.QuantitativeValueDistribution)
  }
}
QuantitativeValueDistributionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.QuantitativeValueDistribution)
QuantitativeValueDistributionMixin.Class = QuantitativeValueDistributionImpl
