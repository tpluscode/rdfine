import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity.js';
import { OfferMixin } from '../lib/Offer.js';

export const OfferBundle = [
  ActivityMixin as Mixin,
  OfferMixin as Mixin];
