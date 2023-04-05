import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccumulationRelationMixin } from '../lib/AccumulationRelation';
import { ActivityMixin } from '../lib/Activity';
import { AgentControlRelationMixin } from '../lib/AgentControlRelation';
import { AgentHierarchicalRelationMixin } from '../lib/AgentHierarchicalRelation';
import { AgentMixin } from '../lib/Agent';
import { AgentNameMixin } from '../lib/AgentName';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation';
import { AgentTemporalRelationMixin } from '../lib/AgentTemporalRelation';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation';
import { CreationRelationMixin } from '../lib/CreationRelation';
import { InstantiationMixin } from '../lib/Instantiation';
import { LanguageMixin } from '../lib/Language';
import { LegalStatusMixin } from '../lib/LegalStatus';
import { ManagementRelationMixin } from '../lib/ManagementRelation';
import { MandateMixin } from '../lib/Mandate';
import { MandateRelationMixin } from '../lib/MandateRelation';
import { PerformanceRelationMixin } from '../lib/PerformanceRelation';
import { PlaceMixin } from '../lib/Place';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation';
import { RecordResourceHoldingRelationMixin } from '../lib/RecordResourceHoldingRelation';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RelationMixin } from '../lib/Relation';
import { RuleMixin } from '../lib/Rule';
import { ThingMixin } from '../lib/Thing';
import { WorkRelationMixin } from '../lib/WorkRelation';

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
