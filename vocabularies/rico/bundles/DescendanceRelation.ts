import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentTemporalRelationMixin } from '../lib/AgentTemporalRelation';
import { DescendanceRelationMixin } from '../lib/DescendanceRelation';
import { FamilyRelationMixin } from '../lib/FamilyRelation';
import { PersonMixin } from '../lib/Person';

export const DescendanceRelationBundle = [
  AgentTemporalRelationMixin as Mixin,
  DescendanceRelationMixin as Mixin,
  FamilyRelationMixin as Mixin,
  PersonMixin as Mixin];
