import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { OutletStoreMixin } from '../OutletStore';

export const OutletStoreBundle = [
  StoreMixin as Mixin,
  OutletStoreMixin as Mixin];
