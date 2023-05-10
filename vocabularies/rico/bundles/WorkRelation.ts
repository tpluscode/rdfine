import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation.js';
import { WorkRelationMixin } from '../lib/WorkRelation.js';

export const WorkRelationBundle = [
  AgentMixin as Mixin,
  AgentToAgentRelationMixin as Mixin,
  WorkRelationMixin as Mixin];
