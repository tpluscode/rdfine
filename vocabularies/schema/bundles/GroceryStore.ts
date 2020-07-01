import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { GroceryStoreMixin } from '../GroceryStore';

export const GroceryStoreBundle = [
  StoreMixin as Mixin,
  GroceryStoreMixin as Mixin];
