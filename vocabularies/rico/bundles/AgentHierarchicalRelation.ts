import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentHierarchicalRelationMixin } from '../lib/AgentHierarchicalRelation';
import { AgentMixin } from '../lib/Agent';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation';

export const AgentHierarchicalRelationBundle = [
  AgentHierarchicalRelationMixin as Mixin,
  AgentMixin as Mixin,
  AgentToAgentRelationMixin as Mixin];
