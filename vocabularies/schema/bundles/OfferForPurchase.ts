import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OfferMixin } from '../lib/Offer';
import { OfferForPurchaseMixin } from '../lib/OfferForPurchase';

export const OfferForPurchaseBundle = [
  OfferMixin as Mixin,
  OfferForPurchaseMixin as Mixin];
