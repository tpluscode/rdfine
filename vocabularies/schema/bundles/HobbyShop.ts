import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { HobbyShopMixin } from '../lib/HobbyShop';

export const HobbyShopBundle = [
  StoreMixin as Mixin,
  HobbyShopMixin as Mixin];
