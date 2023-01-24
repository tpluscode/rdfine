import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChildRelationMixin } from '../lib/ChildRelation';
import { DescendanceRelationMixin } from '../lib/DescendanceRelation';
import { PersonMixin } from '../lib/Person';

export const ChildRelationBundle = [
  ChildRelationMixin as Mixin,
  DescendanceRelationMixin as Mixin,
  PersonMixin as Mixin];
