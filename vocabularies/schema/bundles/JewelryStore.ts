import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { JewelryStoreMixin } from '../lib/JewelryStore';

export const JewelryStoreBundle = [
  StoreMixin as Mixin,
  JewelryStoreMixin as Mixin];
