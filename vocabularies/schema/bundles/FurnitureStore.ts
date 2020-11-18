import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { FurnitureStoreMixin } from '../lib/FurnitureStore';

export const FurnitureStoreBundle = [
  StoreMixin as Mixin,
  FurnitureStoreMixin as Mixin];
