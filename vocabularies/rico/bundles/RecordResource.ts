import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccumulationRelationMixin } from '../lib/AccumulationRelation.js';
import { ActivityDocumentationRelationMixin } from '../lib/ActivityDocumentationRelation.js';
import { ActivityMixin } from '../lib/Activity.js';
import { AgentMixin } from '../lib/Agent.js';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation.js';
import { CreationRelationMixin } from '../lib/CreationRelation.js';
import { ExtentMixin } from '../lib/Extent.js';
import { GroupMixin } from '../lib/Group.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { IntellectualPropertyRightsRelationMixin } from '../lib/IntellectualPropertyRightsRelation.js';
import { ManagementRelationMixin } from '../lib/ManagementRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { PositionMixin } from '../lib/Position.js';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation.js';
import { RecordResourceGeneticRelationMixin } from '../lib/RecordResourceGeneticRelation.js';
import { RecordResourceHoldingRelationMixin } from '../lib/RecordResourceHoldingRelation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { RecordResourceToInstantiationRelationMixin } from '../lib/RecordResourceToInstantiationRelation.js';
import { RecordResourceToRecordResourceRelationMixin } from '../lib/RecordResourceToRecordResourceRelation.js';
import { RelationMixin } from '../lib/Relation.js';
import { RuleMixin } from '../lib/Rule.js';
import { ThingMixin } from '../lib/Thing.js';
import { TitleMixin } from '../lib/Title.js';

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
