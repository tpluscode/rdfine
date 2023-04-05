import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OfferForPurchaseMixin } from '../lib/OfferForPurchase';
import { OfferMixin } from '../lib/Offer';

export const OfferForPurchaseBundle = [
  OfferForPurchaseMixin as Mixin,
  OfferMixin as Mixin];
