import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { TireShopMixin } from '../TireShop';

export const TireShopDependencies = [
  StoreMixin as Mixin,
  TireShopMixin as Mixin];
