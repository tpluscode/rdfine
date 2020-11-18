import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OfferMixin } from '../lib/Offer';
import { AggregateOfferMixin } from '../lib/AggregateOffer';
import { DemandMixin } from '../lib/Demand';

export const AggregateOfferBundle = [
  OfferMixin as Mixin,
  AggregateOfferMixin as Mixin,
  DemandMixin as Mixin];
