import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CorporateBodyMixin } from '../lib/CorporateBody';
import { CorporateBodyTypeMixin } from '../lib/CorporateBodyType';
import { GroupMixin } from '../lib/Group';

export const CorporateBodyBundle = [
  CorporateBodyMixin as Mixin,
  CorporateBodyTypeMixin as Mixin,
  GroupMixin as Mixin];
