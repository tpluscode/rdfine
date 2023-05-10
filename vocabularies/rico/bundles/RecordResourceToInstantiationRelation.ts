import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { RecordResourceToInstantiationRelationMixin } from '../lib/RecordResourceToInstantiationRelation.js';
import { RelationMixin } from '../lib/Relation.js';

export const RecordResourceToInstantiationRelationBundle = [
  InstantiationMixin as Mixin,
  RecordResourceMixin as Mixin,
  RecordResourceToInstantiationRelationMixin as Mixin,
  RelationMixin as Mixin];
