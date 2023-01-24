import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation';
import { GroupMixin } from '../lib/Group';
import { MembershipRelationMixin } from '../lib/MembershipRelation';
import { PersonMixin } from '../lib/Person';
import { PositionMixin } from '../lib/Position';

export const MembershipRelationBundle = [
  AgentToAgentRelationMixin as Mixin,
  GroupMixin as Mixin,
  MembershipRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin];
