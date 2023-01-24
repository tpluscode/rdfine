import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccumulationRelationMixin } from '../lib/AccumulationRelation';
import { ActivityDocumentationRelationMixin } from '../lib/ActivityDocumentationRelation';
import { ActivityMixin } from '../lib/Activity';
import { AgentMixin } from '../lib/Agent';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation';
import { CarrierTypeMixin } from '../lib/CarrierType';
import { CreationRelationMixin } from '../lib/CreationRelation';
import { DerivationRelationMixin } from '../lib/DerivationRelation';
import { ExtentMixin } from '../lib/Extent';
import { FunctionalEquivalenceRelationMixin } from '../lib/FunctionalEquivalenceRelation';
import { GroupMixin } from '../lib/Group';
import { InstantiationMixin } from '../lib/Instantiation';
import { InstantiationToInstantiationRelationMixin } from '../lib/InstantiationToInstantiationRelation';
import { IntellectualPropertyRightsRelationMixin } from '../lib/IntellectualPropertyRightsRelation';
import { ManagementRelationMixin } from '../lib/ManagementRelation';
import { MigrationRelationMixin } from '../lib/MigrationRelation';
import { PersonMixin } from '../lib/Person';
import { PositionMixin } from '../lib/Position';
import { ProductionTechniqueTypeMixin } from '../lib/ProductionTechniqueType';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation';
import { RecordResourceHoldingRelationMixin } from '../lib/RecordResourceHoldingRelation';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RecordResourceToInstantiationRelationMixin } from '../lib/RecordResourceToInstantiationRelation';
import { RepresentationTypeMixin } from '../lib/RepresentationType';
import { ThingMixin } from '../lib/Thing';
import { TitleMixin } from '../lib/Title';

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
