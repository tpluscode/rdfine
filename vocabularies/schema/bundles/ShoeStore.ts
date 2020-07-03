import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { ShoeStoreMixin } from '../ShoeStore';

export const ShoeStoreBundle = [
  StoreMixin as Mixin,
  ShoeStoreMixin as Mixin];
