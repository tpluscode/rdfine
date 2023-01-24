import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccumulationRelationMixin } from '../lib/AccumulationRelation';
import { ActivityDocumentationRelationMixin } from '../lib/ActivityDocumentationRelation';
import { ActivityMixin } from '../lib/Activity';
import { AgentMixin } from '../lib/Agent';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation';
import { CreationRelationMixin } from '../lib/CreationRelation';
import { ExtentMixin } from '../lib/Extent';
import { GroupMixin } from '../lib/Group';
import { InstantiationMixin } from '../lib/Instantiation';
import { IntellectualPropertyRightsRelationMixin } from '../lib/IntellectualPropertyRightsRelation';
import { ManagementRelationMixin } from '../lib/ManagementRelation';
import { PersonMixin } from '../lib/Person';
import { PositionMixin } from '../lib/Position';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation';
import { RecordResourceGeneticRelationMixin } from '../lib/RecordResourceGeneticRelation';
import { RecordResourceHoldingRelationMixin } from '../lib/RecordResourceHoldingRelation';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RecordResourceToInstantiationRelationMixin } from '../lib/RecordResourceToInstantiationRelation';
import { RecordResourceToRecordResourceRelationMixin } from '../lib/RecordResourceToRecordResourceRelation';
import { RelationMixin } from '../lib/Relation';
import { RuleMixin } from '../lib/Rule';
import { ThingMixin } from '../lib/Thing';
import { TitleMixin } from '../lib/Title';

export const RecordResourceBundle = [
  AccumulationRelationMixin as Mixin,
  ActivityDocumentationRelationMixin as Mixin,
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  AgentOriginationRelationMixin as Mixin,
  CreationRelationMixin as Mixin,
  ExtentMixin as Mixin,
  GroupMixin as Mixin,
  InstantiationMixin as Mixin,
  IntellectualPropertyRightsRelationMixin as Mixin,
  ManagementRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin,
  ProvenanceRelationMixin as Mixin,
  RecordResourceGeneticRelationMixin as Mixin,
  RecordResourceHoldingRelationMixin as Mixin,
  RecordResourceMixin as Mixin,
  RecordResourceToInstantiationRelationMixin as Mixin,
  RecordResourceToRecordResourceRelationMixin as Mixin,
  RelationMixin as Mixin,
  RuleMixin as Mixin,
  ThingMixin as Mixin,
  TitleMixin as Mixin];
