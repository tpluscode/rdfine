import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface BroadcastFrequencySpecification<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  broadcastFrequencyValue: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  broadcastFrequencyValueLiteral: number | undefined;
  broadcastSignalModulation: string | undefined;
  broadcastSignalModulationTerm: Schema.QualitativeValue | undefined;
  broadcastSubChannel: string | undefined;
}

export function BroadcastFrequencySpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BroadcastFrequencySpecificationClass extends IntangibleMixin(Resource) implements BroadcastFrequencySpecification {
    @property.resource()
    broadcastFrequencyValue: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.broadcastFrequencyValue, type: Number })
    broadcastFrequencyValueLiteral: number | undefined;
    @property.literal()
    broadcastSignalModulation: string | undefined;
    @property({ path: schema.broadcastSignalModulation })
    broadcastSignalModulationTerm: Schema.QualitativeValue | undefined;
    @property.literal()
    broadcastSubChannel: string | undefined;
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
