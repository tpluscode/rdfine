import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OfferMixin } from '../Offer';
import { AggregateOfferMixin } from '../AggregateOffer';
import { DemandMixin } from '../Demand';

export const AggregateOfferBundle = [
  OfferMixin as Mixin,
  AggregateOfferMixin as Mixin,
  DemandMixin as Mixin];
