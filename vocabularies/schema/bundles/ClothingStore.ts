import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { ClothingStoreMixin } from '../ClothingStore';

export const ClothingStoreBundle = [
  StoreMixin as Mixin,
  ClothingStoreMixin as Mixin];
