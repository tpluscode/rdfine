import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { ShoppingCenterMixin } from '../lib/ShoppingCenter';

export const ShoppingCenterBundle = [
  LocalBusinessMixin as Mixin,
  ShoppingCenterMixin as Mixin];
