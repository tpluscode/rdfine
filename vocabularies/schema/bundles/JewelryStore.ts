import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { JewelryStoreMixin } from '../JewelryStore';

export const JewelryStoreBundle = [
  StoreMixin as Mixin,
  JewelryStoreMixin as Mixin];
