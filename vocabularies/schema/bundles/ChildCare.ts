import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChildCareMixin } from '../lib/ChildCare';
import { LocalBusinessMixin } from '../lib/LocalBusiness';

export const ChildCareBundle = [
  ChildCareMixin as Mixin,
  LocalBusinessMixin as Mixin];
