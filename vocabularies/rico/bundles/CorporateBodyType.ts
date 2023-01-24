import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CorporateBodyMixin } from '../lib/CorporateBody';
import { CorporateBodyTypeMixin } from '../lib/CorporateBodyType';
import { TypeMixin } from '../lib/Type';

export const CorporateBodyTypeBundle = [
  CorporateBodyMixin as Mixin,
  CorporateBodyTypeMixin as Mixin,
  TypeMixin as Mixin];
