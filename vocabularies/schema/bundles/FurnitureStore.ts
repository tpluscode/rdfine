import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FurnitureStoreMixin } from '../lib/FurnitureStore';
import { StoreMixin } from '../lib/Store';

export const FurnitureStoreBundle = [
  FurnitureStoreMixin as Mixin,
  StoreMixin as Mixin];
