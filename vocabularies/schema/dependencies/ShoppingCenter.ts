import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { ShoppingCenterMixin } from '../ShoppingCenter';

export const ShoppingCenterDependencies = [
  LocalBusinessMixin as Mixin,
  ShoppingCenterMixin as Mixin];
