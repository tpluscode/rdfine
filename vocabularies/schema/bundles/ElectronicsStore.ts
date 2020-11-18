import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { ElectronicsStoreMixin } from '../lib/ElectronicsStore';

export const ElectronicsStoreBundle = [
  StoreMixin as Mixin,
  ElectronicsStoreMixin as Mixin];
