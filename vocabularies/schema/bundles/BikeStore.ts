import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BikeStoreMixin } from '../lib/BikeStore';
import { StoreMixin } from '../lib/Store';

export const BikeStoreBundle = [
  BikeStoreMixin as Mixin,
  StoreMixin as Mixin];
