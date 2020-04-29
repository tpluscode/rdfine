import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { GroceryStoreMixin } from '../GroceryStore';

export const GroceryStoreDependencies = [
  StoreMixin as Mixin,
  GroceryStoreMixin as Mixin];
