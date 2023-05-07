import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation.js';
import { GroupMixin } from '../lib/Group.js';
import { MembershipRelationMixin } from '../lib/MembershipRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { PositionMixin } from '../lib/Position.js';

export const MembershipRelationBundle = [
  AgentToAgentRelationMixin as Mixin,
  GroupMixin as Mixin,
  MembershipRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin];
