import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HobbyShopMixin } from '../lib/HobbyShop';
import { StoreMixin } from '../lib/Store';

export const HobbyShopBundle = [
  HobbyShopMixin as Mixin,
  StoreMixin as Mixin];
