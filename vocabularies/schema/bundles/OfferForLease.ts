import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OfferMixin } from '../lib/Offer';
import { OfferForLeaseMixin } from '../lib/OfferForLease';

export const OfferForLeaseBundle = [
  OfferMixin as Mixin,
  OfferForLeaseMixin as Mixin];
