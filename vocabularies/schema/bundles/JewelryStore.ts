import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JewelryStoreMixin } from '../lib/JewelryStore';
import { StoreMixin } from '../lib/Store';

export const JewelryStoreBundle = [
  JewelryStoreMixin as Mixin,
  StoreMixin as Mixin];
