import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { ElectronicsStoreMixin } from '../ElectronicsStore';

export const ElectronicsStoreBundle = [
  StoreMixin as Mixin,
  ElectronicsStoreMixin as Mixin];
