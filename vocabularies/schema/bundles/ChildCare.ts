import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { ChildCareMixin } from '../ChildCare';

export const ChildCareBundle = [
  LocalBusinessMixin as Mixin,
  ChildCareMixin as Mixin];
