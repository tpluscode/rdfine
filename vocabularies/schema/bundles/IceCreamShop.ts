import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { IceCreamShopMixin } from '../lib/IceCreamShop';

export const IceCreamShopBundle = [
  FoodEstablishmentMixin as Mixin,
  IceCreamShopMixin as Mixin];
