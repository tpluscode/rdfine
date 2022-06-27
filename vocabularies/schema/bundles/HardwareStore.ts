import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { HardwareStoreMixin } from '../lib/HardwareStore';
import { StoreMixin } from '../lib/Store';

export const HardwareStoreBundle = [
  HardwareStoreMixin as Mixin,
  StoreMixin as Mixin];
