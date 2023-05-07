import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation.js';
import { GroupMixin } from '../lib/Group.js';
import { PositionMixin } from '../lib/Position.js';
import { PositionToGroupRelationMixin } from '../lib/PositionToGroupRelation.js';

export const PositionToGroupRelationBundle = [
  AgentToAgentRelationMixin as Mixin,
  GroupMixin as Mixin,
  PositionMixin as Mixin,
  PositionToGroupRelationMixin as Mixin];
