import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { HardwareStoreMixin } from '../lib/HardwareStore';

export const HardwareStoreBundle = [
  StoreMixin as Mixin,
  HardwareStoreMixin as Mixin];
