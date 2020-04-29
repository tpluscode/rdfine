import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClassMixin } from '../Class';
import { RestrictionMixin } from '../Restriction';

export const RestrictionDependencies = [
  ClassMixin as Mixin,
  RestrictionMixin as Mixin];
