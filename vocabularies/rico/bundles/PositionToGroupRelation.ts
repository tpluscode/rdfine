import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation';
import { GroupMixin } from '../lib/Group';
import { PositionMixin } from '../lib/Position';
import { PositionToGroupRelationMixin } from '../lib/PositionToGroupRelation';

export const PositionToGroupRelationBundle = [
  AgentToAgentRelationMixin as Mixin,
  GroupMixin as Mixin,
  PositionMixin as Mixin,
  PositionToGroupRelationMixin as Mixin];
