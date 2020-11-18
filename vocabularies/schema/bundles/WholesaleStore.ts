import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { WholesaleStoreMixin } from '../lib/WholesaleStore';

export const WholesaleStoreBundle = [
  StoreMixin as Mixin,
  WholesaleStoreMixin as Mixin];
