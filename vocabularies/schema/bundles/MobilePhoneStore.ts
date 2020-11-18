import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { MobilePhoneStoreMixin } from '../lib/MobilePhoneStore';

export const MobilePhoneStoreBundle = [
  StoreMixin as Mixin,
  MobilePhoneStoreMixin as Mixin];
