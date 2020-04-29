import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { IceCreamShopMixin } from '../IceCreamShop';

export const IceCreamShopDependencies = [
  FoodEstablishmentMixin as Mixin,
  IceCreamShopMixin as Mixin];
