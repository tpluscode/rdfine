import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { GroceryStoreMixin } from '../lib/GroceryStore';

export const GroceryStoreBundle = [
  StoreMixin as Mixin,
  GroceryStoreMixin as Mixin];
