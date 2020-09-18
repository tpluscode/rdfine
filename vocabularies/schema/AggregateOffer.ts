import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { OfferMixin } from './Offer';

export interface AggregateOffer extends Schema.Offer, RdfResource {
  highPrice: number | string | undefined;
  lowPrice: number | string | undefined;
  offerCount: number | undefined;
  offers: Schema.Demand | Schema.Offer | undefined;
}

export function AggregateOfferMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AggregateOfferClass extends OfferMixin(Resource) implements AggregateOffer {
    @property.literal()
    highPrice: number | string | undefined;
    @property.literal()
    lowPrice: number | string | undefined;
    @property.literal({ type: Number })
    offerCount: number | undefined;
    @property.resource()
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
