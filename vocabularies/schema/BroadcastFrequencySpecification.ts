import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface BroadcastFrequencySpecification extends Schema.Intangible, RdfResource {
  broadcastFrequencyValue: Schema.QuantitativeValue;
  broadcastFrequencyValueLiteral: number;
}

export default function BroadcastFrequencySpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BroadcastFrequencySpecificationClass extends IntangibleMixin(Resource) implements BroadcastFrequencySpecification {
    @property.resource()
    broadcastFrequencyValue!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.broadcastFrequencyValue })
    broadcastFrequencyValueLiteral!: number;
  }
  return BroadcastFrequencySpecificationClass
}

class BroadcastFrequencySpecificationImpl extends BroadcastFrequencySpecificationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BroadcastFrequencySpecification)
  }
}
BroadcastFrequencySpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BroadcastFrequencySpecification)
BroadcastFrequencySpecificationMixin.Class = BroadcastFrequencySpecificationImpl
