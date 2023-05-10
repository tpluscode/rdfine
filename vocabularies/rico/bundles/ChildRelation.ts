import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ChildRelationMixin } from '../lib/ChildRelation.js';
import { DescendanceRelationMixin } from '../lib/DescendanceRelation.js';
import { PersonMixin } from '../lib/Person.js';

export const ChildRelationBundle = [
  ChildRelationMixin as Mixin,
  DescendanceRelationMixin as Mixin,
  PersonMixin as Mixin];
