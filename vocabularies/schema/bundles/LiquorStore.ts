import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LiquorStoreMixin } from '../lib/LiquorStore';
import { StoreMixin } from '../lib/Store';

export const LiquorStoreBundle = [
  LiquorStoreMixin as Mixin,
  StoreMixin as Mixin];
