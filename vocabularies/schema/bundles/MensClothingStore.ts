import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MensClothingStoreMixin } from '../lib/MensClothingStore';
import { StoreMixin } from '../lib/Store';

export const MensClothingStoreBundle = [
  MensClothingStoreMixin as Mixin,
  StoreMixin as Mixin];
