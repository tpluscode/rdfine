import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { OfferMixin } from '../lib/Offer';

export const OfferBundle = [
  ActivityMixin as Mixin,
  OfferMixin as Mixin];
