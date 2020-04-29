import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { HobbyShopMixin } from '../HobbyShop';

export const HobbyShopDependencies = [
  StoreMixin as Mixin,
  HobbyShopMixin as Mixin];
