import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { GardenStoreMixin } from '../lib/GardenStore';

export const GardenStoreBundle = [
  StoreMixin as Mixin,
  GardenStoreMixin as Mixin];
