import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OfferMixin } from '../Offer';
import { OfferForLeaseMixin } from '../OfferForLease';

export const OfferForLeaseBundle = [
  OfferMixin as Mixin,
  OfferForLeaseMixin as Mixin];
