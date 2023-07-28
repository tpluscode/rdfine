import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface BroadcastFrequencySpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  broadcastFrequencyValue: Schema.QuantitativeValue<D> | undefined;
  broadcastFrequencyValueLiteral: number | undefined;
  broadcastSignalModulation: string | undefined;
  broadcastSignalModulationTerm: Schema.QualitativeValue | undefined;
  broadcastSubChannel: string | undefined;
}

export function BroadcastFrequencySpecificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BroadcastFrequencySpecification & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BroadcastFrequencySpecificationClass extends IntangibleMixin(Resource) {
    @rdfine.property.resource()
    broadcastFrequencyValue: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ path: schema.broadcastFrequencyValue, type: Number })
    broadcastFrequencyValueLiteral: number | undefined;
    @rdfine.property.literal()
    broadcastSignalModulation: string | undefined;
    @rdfine.property({ path: schema.broadcastSignalModulation })
    broadcastSignalModulationTerm: Schema.QualitativeValue | undefined;
    @rdfine.property.literal()
    broadcastSubChannel: string | undefined;
  }
  return BroadcastFrequencySpecificationClass as any
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

export const fromPointer = createFactory<BroadcastFrequencySpecification>([IntangibleMixin, BroadcastFrequencySpecificationMixin], { types: [schema.BroadcastFrequencySpecification] });
