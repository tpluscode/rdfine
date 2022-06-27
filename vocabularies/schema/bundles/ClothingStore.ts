import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClothingStoreMixin } from '../lib/ClothingStore';
import { StoreMixin } from '../lib/Store';

export const ClothingStoreBundle = [
  ClothingStoreMixin as Mixin,
  StoreMixin as Mixin];
