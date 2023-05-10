import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccumulationRelationMixin } from '../lib/AccumulationRelation.js';
import { ActivityDocumentationRelationMixin } from '../lib/ActivityDocumentationRelation.js';
import { ActivityMixin } from '../lib/Activity.js';
import { AgentMixin } from '../lib/Agent.js';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation.js';
import { CarrierTypeMixin } from '../lib/CarrierType.js';
import { CreationRelationMixin } from '../lib/CreationRelation.js';
import { DerivationRelationMixin } from '../lib/DerivationRelation.js';
import { ExtentMixin } from '../lib/Extent.js';
import { FunctionalEquivalenceRelationMixin } from '../lib/FunctionalEquivalenceRelation.js';
import { GroupMixin } from '../lib/Group.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { InstantiationToInstantiationRelationMixin } from '../lib/InstantiationToInstantiationRelation.js';
import { IntellectualPropertyRightsRelationMixin } from '../lib/IntellectualPropertyRightsRelation.js';
import { ManagementRelationMixin } from '../lib/ManagementRelation.js';
import { MigrationRelationMixin } from '../lib/MigrationRelation.js';
import { PersonMixin } from '../lib/Person.js';
import { PositionMixin } from '../lib/Position.js';
import { ProductionTechniqueTypeMixin } from '../lib/ProductionTechniqueType.js';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation.js';
import { RecordResourceHoldingRelationMixin } from '../lib/RecordResourceHoldingRelation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { RecordResourceToInstantiationRelationMixin } from '../lib/RecordResourceToInstantiationRelation.js';
import { RepresentationTypeMixin } from '../lib/RepresentationType.js';
import { ThingMixin } from '../lib/Thing.js';
import { TitleMixin } from '../lib/Title.js';

export const InstantiationBundle = [
  AccumulationRelationMixin as Mixin,
  ActivityDocumentationRelationMixin as Mixin,
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  AgentOriginationRelationMixin as Mixin,
  CarrierTypeMixin as Mixin,
  CreationRelationMixin as Mixin,
  DerivationRelationMixin as Mixin,
  ExtentMixin as Mixin,
  FunctionalEquivalenceRelationMixin as Mixin,
  GroupMixin as Mixin,
  InstantiationMixin as Mixin,
  InstantiationToInstantiationRelationMixin as Mixin,
  IntellectualPropertyRightsRelationMixin as Mixin,
  ManagementRelationMixin as Mixin,
  MigrationRelationMixin as Mixin,
  PersonMixin as Mixin,
  PositionMixin as Mixin,
  ProductionTechniqueTypeMixin as Mixin,
  ProvenanceRelationMixin as Mixin,
  RecordResourceHoldingRelationMixin as Mixin,
  RecordResourceMixin as Mixin,
  RecordResourceToInstantiationRelationMixin as Mixin,
  RepresentationTypeMixin as Mixin,
  ThingMixin as Mixin,
  TitleMixin as Mixin];
