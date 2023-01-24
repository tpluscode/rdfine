import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation';
import { RelationMixin } from '../lib/Relation';

export const AgentToAgentRelationBundle = [
  AgentMixin as Mixin,
  AgentToAgentRelationMixin as Mixin,
  RelationMixin as Mixin];
