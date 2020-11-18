import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { ShoeStoreMixin } from '../lib/ShoeStore';

export const ShoeStoreBundle = [
  StoreMixin as Mixin,
  ShoeStoreMixin as Mixin];
