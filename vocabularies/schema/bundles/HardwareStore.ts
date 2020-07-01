import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { HardwareStoreMixin } from '../HardwareStore';

export const HardwareStoreBundle = [
  StoreMixin as Mixin,
  HardwareStoreMixin as Mixin];
