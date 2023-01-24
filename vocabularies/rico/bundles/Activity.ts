import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityDocumentationRelationMixin } from '../lib/ActivityDocumentationRelation';
import { ActivityMixin } from '../lib/Activity';
import { ActivityTypeMixin } from '../lib/ActivityType';
import { AgentMixin } from '../lib/Agent';
import { AgentTemporalRelationMixin } from '../lib/AgentTemporalRelation';
import { EventMixin } from '../lib/Event';
import { InstantiationMixin } from '../lib/Instantiation';
import { MandateRelationMixin } from '../lib/MandateRelation';
import { PerformanceRelationMixin } from '../lib/PerformanceRelation';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation';
import { RecordResourceMixin } from '../lib/RecordResource';

export const ActivityBundle = [
  ActivityDocumentationRelationMixin as Mixin,
  ActivityMixin as Mixin,
  ActivityTypeMixin as Mixin,
  AgentMixin as Mixin,
  AgentTemporalRelationMixin as Mixin,
  EventMixin as Mixin,
  InstantiationMixin as Mixin,
  MandateRelationMixin as Mixin,
  PerformanceRelationMixin as Mixin,
  ProvenanceRelationMixin as Mixin,
  RecordResourceMixin as Mixin];
