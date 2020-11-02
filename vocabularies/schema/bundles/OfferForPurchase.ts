import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OfferMixin } from '../Offer';
import { OfferForPurchaseMixin } from '../OfferForPurchase';

export const OfferForPurchaseBundle = [
  OfferMixin as Mixin,
  OfferForPurchaseMixin as Mixin];
