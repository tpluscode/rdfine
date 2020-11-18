import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { OutletStoreMixin } from '../lib/OutletStore';

export const OutletStoreBundle = [
  StoreMixin as Mixin,
  OutletStoreMixin as Mixin];
