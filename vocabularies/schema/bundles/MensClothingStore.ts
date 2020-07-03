import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { MensClothingStoreMixin } from '../MensClothingStore';

export const MensClothingStoreBundle = [
  StoreMixin as Mixin,
  MensClothingStoreMixin as Mixin];
