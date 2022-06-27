import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OutletStoreMixin } from '../lib/OutletStore';
import { StoreMixin } from '../lib/Store';

export const OutletStoreBundle = [
  OutletStoreMixin as Mixin,
  StoreMixin as Mixin];
