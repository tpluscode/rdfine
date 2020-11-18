import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { LiquorStoreMixin } from '../lib/LiquorStore';

export const LiquorStoreBundle = [
  StoreMixin as Mixin,
  LiquorStoreMixin as Mixin];
