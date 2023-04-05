import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation';
import { WorkRelationMixin } from '../lib/WorkRelation';

export const WorkRelationBundle = [
  AgentMixin as Mixin,
  AgentToAgentRelationMixin as Mixin,
  WorkRelationMixin as Mixin];
