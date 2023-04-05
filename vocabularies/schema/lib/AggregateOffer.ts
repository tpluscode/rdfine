import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OfferMixin } from './Offer';

export interface AggregateOffer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Offer<D>, RdfResource<D> {
  highPrice: number | string | undefined;
  lowPrice: number | string | undefined;
  offerCount: number | undefined;
  offers: Schema.Demand<D> | Schema.Offer<D> | undefined;
}

export function AggregateOfferMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AggregateOffer> & RdfResourceCore> & Base {
  @namespace(schema)
  class AggregateOfferClass extends OfferMixin(Resource) implements Partial<AggregateOffer> {
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

export const fromPointer = createFactory<AggregateOffer>([OfferMixin, AggregateOfferMixin], { types: [schema.AggregateOffer] });
