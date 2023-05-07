import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityDocumentationRelationMixin } from '../lib/ActivityDocumentationRelation.js';
import { ActivityMixin } from '../lib/Activity.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';

export const ActivityDocumentationRelationBundle = [
  ActivityDocumentationRelationMixin as Mixin,
  ActivityMixin as Mixin,
  InstantiationMixin as Mixin,
  ProvenanceRelationMixin as Mixin,
  RecordResourceMixin as Mixin];
