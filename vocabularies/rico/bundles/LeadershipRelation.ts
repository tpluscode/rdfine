import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentControlRelationMixin } from '../lib/AgentControlRelation.js';
import { GroupMixin } from '../lib/Group.js';
import { LeadershipRelationMixin } from '../lib/LeadershipRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { PositionMixin } from '../lib/Position.js';

export const LeadershipRelationBundle = [
  AgentControlRelationMixin as Mixin,
  GroupMixin as Mixin,
  LeadershipRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin];
