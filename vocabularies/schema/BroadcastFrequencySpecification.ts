import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface BroadcastFrequencySpecification extends Schema.Intangible, RdfResource {
  broadcastFrequencyValue: Schema.QuantitativeValue;
  broadcastFrequencyValueLiteral: number;
}

export function BroadcastFrequencySpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BroadcastFrequencySpecificationClass extends IntangibleMixin(Resource) implements BroadcastFrequencySpecification {
    @property.resource()
    broadcastFrequencyValue!: Schema.QuantitativeValue;
    @property.literal({ path: schema.broadcastFrequencyValue, type: Number })
    broadcastFrequencyValueLiteral!: number;
  }
  return BroadcastFrequencySpecificationClass
}

class BroadcastFrequencySpecificationImpl extends BroadcastFrequencySpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BroadcastFrequencySpecification>) {
    super(arg, init)
    this.types.add(schema.BroadcastFrequencySpecification)
  }

  static readonly __mixins: Mixin[] = [BroadcastFrequencySpecificationMixin, IntangibleMixin];
}
BroadcastFrequencySpecificationMixin.appliesTo = schema.BroadcastFrequencySpecification
BroadcastFrequencySpecificationMixin.Class = BroadcastFrequencySpecificationImpl
