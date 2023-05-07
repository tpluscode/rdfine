import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccumulationRelationMixin } from '../lib/AccumulationRelation.js';
import { ActivityMixin } from '../lib/Activity.js';
import { AgentControlRelationMixin } from '../lib/AgentControlRelation.js';
import { AgentHierarchicalRelationMixin } from '../lib/AgentHierarchicalRelation.js';
import { AgentMixin } from '../lib/Agent.js';
import { AgentNameMixin } from '../lib/AgentName.js';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation.js';
import { AgentTemporalRelationMixin } from '../lib/AgentTemporalRelation.js';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation.js';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation.js';
import { CreationRelationMixin } from '../lib/CreationRelation.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { LanguageMixin } from '../lib/Language.js';
import { LegalStatusMixin } from '../lib/LegalStatus.js';
import { ManagementRelationMixin } from '../lib/ManagementRelation.js';
import { MandateMixin } from '../lib/Mandate.js';
import { MandateRelationMixin } from '../lib/MandateRelation.js';
import { PerformanceRelationMixin } from '../lib/PerformanceRelation.js';
import { PlaceMixin } from '../lib/Place.js';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation.js';
import { RecordResourceHoldingRelationMixin } from '../lib/RecordResourceHoldingRelation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { RelationMixin } from '../lib/Relation.js';
import { RuleMixin } from '../lib/Rule.js';
import { ThingMixin } from '../lib/Thing.js';
import { WorkRelationMixin } from '../lib/WorkRelation.js';

export const AgentBundle = [
  AccumulationRelationMixin as Mixin,
  ActivityMixin as Mixin,
  AgentControlRelationMixin as Mixin,
  AgentHierarchicalRelationMixin as Mixin,
  AgentMixin as Mixin,
  AgentNameMixin as Mixin,
  AgentOriginationRelationMixin as Mixin,
  AgentTemporalRelationMixin as Mixin,
  AgentToAgentRelationMixin as Mixin,
  AuthorityRelationMixin as Mixin,
  CreationRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  LanguageMixin as Mixin,
  LegalStatusMixin as Mixin,
  ManagementRelationMixin as Mixin,
  MandateMixin as Mixin,
  MandateRelationMixin as Mixin,
  PerformanceRelationMixin as Mixin,
  PlaceMixin as Mixin,
  ProvenanceRelationMixin as Mixin,
  RecordResourceHoldingRelationMixin as Mixin,
  RecordResourceMixin as Mixin,
  RelationMixin as Mixin,
  RuleMixin as Mixin,
  ThingMixin as Mixin,
  WorkRelationMixin as Mixin];
