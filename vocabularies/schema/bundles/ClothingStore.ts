import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { ClothingStoreMixin } from '../lib/ClothingStore';

export const ClothingStoreBundle = [
  StoreMixin as Mixin,
  ClothingStoreMixin as Mixin];
