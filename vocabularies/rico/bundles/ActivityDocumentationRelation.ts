import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityDocumentationRelationMixin } from '../lib/ActivityDocumentationRelation';
import { ActivityMixin } from '../lib/Activity';
import { InstantiationMixin } from '../lib/Instantiation';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation';
import { RecordResourceMixin } from '../lib/RecordResource';

export const ActivityDocumentationRelationBundle = [
  ActivityDocumentationRelationMixin as Mixin,
  ActivityMixin as Mixin,
  InstantiationMixin as Mixin,
  ProvenanceRelationMixin as Mixin,
  RecordResourceMixin as Mixin];
