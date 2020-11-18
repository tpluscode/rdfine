import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { CafeOrCoffeeShopMixin } from '../lib/CafeOrCoffeeShop';

export const CafeOrCoffeeShopBundle = [
  FoodEstablishmentMixin as Mixin,
  CafeOrCoffeeShopMixin as Mixin];
