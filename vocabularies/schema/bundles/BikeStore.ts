import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { BikeStoreMixin } from '../lib/BikeStore';

export const BikeStoreBundle = [
  StoreMixin as Mixin,
  BikeStoreMixin as Mixin];
