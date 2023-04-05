import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OfferForLeaseMixin } from '../lib/OfferForLease';
import { OfferMixin } from '../lib/Offer';

export const OfferForLeaseBundle = [
  OfferForLeaseMixin as Mixin,
  OfferMixin as Mixin];
