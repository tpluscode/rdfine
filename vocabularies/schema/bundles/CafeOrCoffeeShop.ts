import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CafeOrCoffeeShopMixin } from '../lib/CafeOrCoffeeShop';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';

export const CafeOrCoffeeShopBundle = [
  CafeOrCoffeeShopMixin as Mixin,
  FoodEstablishmentMixin as Mixin];
