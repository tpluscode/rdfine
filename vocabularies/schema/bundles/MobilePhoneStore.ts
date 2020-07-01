import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { MobilePhoneStoreMixin } from '../MobilePhoneStore';

export const MobilePhoneStoreBundle = [
  StoreMixin as Mixin,
  MobilePhoneStoreMixin as Mixin];
