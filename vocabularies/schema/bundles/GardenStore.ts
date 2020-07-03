import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { GardenStoreMixin } from '../GardenStore';

export const GardenStoreBundle = [
  StoreMixin as Mixin,
  GardenStoreMixin as Mixin];
