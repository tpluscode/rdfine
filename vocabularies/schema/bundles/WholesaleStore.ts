import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { WholesaleStoreMixin } from '../WholesaleStore';

export const WholesaleStoreBundle = [
  StoreMixin as Mixin,
  WholesaleStoreMixin as Mixin];
