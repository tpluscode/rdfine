import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { AgentMixin } from '../lib/Agent';
import { EventRelationMixin } from '../lib/EventRelation';
import { PerformanceRelationMixin } from '../lib/PerformanceRelation';

export const PerformanceRelationBundle = [
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  EventRelationMixin as Mixin,
  PerformanceRelationMixin as Mixin];
