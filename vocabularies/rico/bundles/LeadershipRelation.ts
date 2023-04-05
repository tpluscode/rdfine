import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentControlRelationMixin } from '../lib/AgentControlRelation';
import { GroupMixin } from '../lib/Group';
import { LeadershipRelationMixin } from '../lib/LeadershipRelation';
import { PersonMixin } from '../lib/Person';
import { PositionMixin } from '../lib/Position';

export const LeadershipRelationBundle = [
  AgentControlRelationMixin as Mixin,
  GroupMixin as Mixin,
  LeadershipRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin];
