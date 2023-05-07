import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity.js';
import { AgentMixin } from '../lib/Agent.js';
import { AgentTemporalRelationMixin } from '../lib/AgentTemporalRelation.js';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation.js';
import { TemporalRelationMixin } from '../lib/TemporalRelation.js';

export const AgentTemporalRelationBundle = [
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  AgentTemporalRelationMixin as Mixin,
  AgentToAgentRelationMixin as Mixin,
  TemporalRelationMixin as Mixin];
