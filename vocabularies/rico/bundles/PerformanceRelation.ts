import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity.js';
import { AgentMixin } from '../lib/Agent.js';
import { EventRelationMixin } from '../lib/EventRelation.js';
import { PerformanceRelationMixin } from '../lib/PerformanceRelation.js';

export const PerformanceRelationBundle = [
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  EventRelationMixin as Mixin,
  PerformanceRelationMixin as Mixin];
