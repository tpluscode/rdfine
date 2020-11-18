import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { TireShopMixin } from '../lib/TireShop';

export const TireShopBundle = [
  StoreMixin as Mixin,
  TireShopMixin as Mixin];
