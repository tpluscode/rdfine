import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import OfferMixin from './Offer';

export interface AggregateOffer extends Schema.Offer, RdfResource {
  highPrice: number | string;
  lowPrice: number | string;
  offerCount: number;
  offers: Schema.Demand | Schema.Offer;
}

export default function AggregateOfferMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AggregateOfferClass extends OfferMixin(Resource) implements AggregateOffer {
    @property.literal()
    highPrice!: number | string;
    @property.literal()
    lowPrice!: number | string;
    @property.literal({ type: Number })
    offerCount!: number;
    @property.resource()
    offers!: Schema.Demand | Schema.Offer;
  }
  return AggregateOfferClass
}

class AggregateOfferImpl extends AggregateOfferMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AggregateOffer>) {
    super(arg, init)
    this.types.add(schema.AggregateOffer)
  }
}
AggregateOfferMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AggregateOffer)
AggregateOfferMixin.Class = AggregateOfferImpl
