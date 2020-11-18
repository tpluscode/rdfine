import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClassMixin } from '../lib/Class';
import { RestrictionMixin } from '../lib/Restriction';

export const RestrictionBundle = [
  ClassMixin as Mixin,
  RestrictionMixin as Mixin];
