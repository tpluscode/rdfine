import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { AgentMixin } from '../lib/Agent';
import { AgentTemporalRelationMixin } from '../lib/AgentTemporalRelation';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation';
import { TemporalRelationMixin } from '../lib/TemporalRelation';

export const AgentTemporalRelationBundle = [
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  AgentTemporalRelationMixin as Mixin,
  AgentToAgentRelationMixin as Mixin,
  TemporalRelationMixin as Mixin];
