import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GroceryStoreMixin } from '../lib/GroceryStore';
import { StoreMixin } from '../lib/Store';

export const GroceryStoreBundle = [
  GroceryStoreMixin as Mixin,
  StoreMixin as Mixin];
