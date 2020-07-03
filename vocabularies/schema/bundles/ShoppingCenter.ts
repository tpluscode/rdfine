import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { ShoppingCenterMixin } from '../ShoppingCenter';

export const ShoppingCenterBundle = [
  LocalBusinessMixin as Mixin,
  ShoppingCenterMixin as Mixin];
