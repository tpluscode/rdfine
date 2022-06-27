import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AggregateOfferMixin } from '../lib/AggregateOffer';
import { DemandMixin } from '../lib/Demand';
import { OfferMixin } from '../lib/Offer';

export const AggregateOfferBundle = [
  AggregateOfferMixin as Mixin,
  DemandMixin as Mixin,
  OfferMixin as Mixin];
