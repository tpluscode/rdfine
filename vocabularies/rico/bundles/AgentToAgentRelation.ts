import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation.js';
import { RelationMixin } from '../lib/Relation.js';

export const AgentToAgentRelationBundle = [
  AgentMixin as Mixin,
  AgentToAgentRelationMixin as Mixin,
  RelationMixin as Mixin];
