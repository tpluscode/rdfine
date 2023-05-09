import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OfferMixin } from './Offer.js';

export interface AggregateOffer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Offer<D>, rdfine.RdfResource<D> {
  highPrice: number | string | undefined;
  lowPrice: number | string | undefined;
  offerCount: number | undefined;
  offers: Schema.Demand<D> | Schema.Offer<D> | undefined;
}

export function AggregateOfferMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AggregateOffer> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AggregateOfferClass extends OfferMixin(Resource) implements Partial<AggregateOffer> {
    @rdfine.property.literal()
    highPrice: number | string | undefined;
    @rdfine.property.literal()
    lowPrice: number | string | undefined;
    @rdfine.property.literal({ type: Number })
    offerCount: number | undefined;
    @rdfine.property.resource()
    offers: Schema.Demand | Schema.Offer | undefined;
  }
  return AggregateOfferClass
}

class AggregateOfferImpl extends AggregateOfferMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AggregateOffer>) {
    super(arg, init)
    this.types.add(schema.AggregateOffer)
  }

  static readonly __mixins: Mixin[] = [AggregateOfferMixin, OfferMixin];
}
AggregateOfferMixin.appliesTo = schema.AggregateOffer
AggregateOfferMixin.Class = AggregateOfferImpl

export const fromPointer = createFactory<AggregateOffer>([OfferMixin, AggregateOfferMixin], { types: [schema.AggregateOffer] });
