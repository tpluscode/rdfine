import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { ChildCareMixin } from '../lib/ChildCare';

export const ChildCareBundle = [
  LocalBusinessMixin as Mixin,
  ChildCareMixin as Mixin];
