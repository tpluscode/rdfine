import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GardenStoreMixin } from '../lib/GardenStore';
import { StoreMixin } from '../lib/Store';

export const GardenStoreBundle = [
  GardenStoreMixin as Mixin,
  StoreMixin as Mixin];
