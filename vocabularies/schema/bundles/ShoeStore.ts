import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ShoeStoreMixin } from '../lib/ShoeStore';
import { StoreMixin } from '../lib/Store';

export const ShoeStoreBundle = [
  ShoeStoreMixin as Mixin,
  StoreMixin as Mixin];
