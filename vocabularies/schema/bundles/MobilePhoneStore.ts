import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MobilePhoneStoreMixin } from '../lib/MobilePhoneStore';
import { StoreMixin } from '../lib/Store';

export const MobilePhoneStoreBundle = [
  MobilePhoneStoreMixin as Mixin,
  StoreMixin as Mixin];
