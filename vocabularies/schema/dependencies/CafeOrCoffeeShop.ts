import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { CafeOrCoffeeShopMixin } from '../CafeOrCoffeeShop';

export const CafeOrCoffeeShopDependencies = [
  FoodEstablishmentMixin as Mixin,
  CafeOrCoffeeShopMixin as Mixin];
