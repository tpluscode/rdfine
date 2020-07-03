import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClassMixin } from '../Class';
import { RestrictionMixin } from '../Restriction';

export const RestrictionBundle = [
  ClassMixin as Mixin,
  RestrictionMixin as Mixin];
