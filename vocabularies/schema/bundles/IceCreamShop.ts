import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { IceCreamShopMixin } from '../IceCreamShop';

export const IceCreamShopBundle = [
  FoodEstablishmentMixin as Mixin,
  IceCreamShopMixin as Mixin];
