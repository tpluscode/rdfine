import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { MensClothingStoreMixin } from '../lib/MensClothingStore';

export const MensClothingStoreBundle = [
  StoreMixin as Mixin,
  MensClothingStoreMixin as Mixin];
