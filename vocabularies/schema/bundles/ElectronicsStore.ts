import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ElectronicsStoreMixin } from '../lib/ElectronicsStore';
import { StoreMixin } from '../lib/Store';

export const ElectronicsStoreBundle = [
  ElectronicsStoreMixin as Mixin,
  StoreMixin as Mixin];
