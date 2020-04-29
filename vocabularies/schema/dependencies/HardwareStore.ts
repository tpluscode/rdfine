import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { HardwareStoreMixin } from '../HardwareStore';

export const HardwareStoreDependencies = [
  StoreMixin as Mixin,
  HardwareStoreMixin as Mixin];
