import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { BikeStoreMixin } from '../BikeStore';

export const BikeStoreBundle = [
  StoreMixin as Mixin,
  BikeStoreMixin as Mixin];
