import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { FurnitureStoreMixin } from '../FurnitureStore';

export const FurnitureStoreBundle = [
  StoreMixin as Mixin,
  FurnitureStoreMixin as Mixin];
