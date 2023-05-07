import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { RecordResourceToRecordResourceRelationMixin } from '../lib/RecordResourceToRecordResourceRelation.js';
import { RelationMixin } from '../lib/Relation.js';

export const RecordResourceToRecordResourceRelationBundle = [
  RecordResourceMixin as Mixin,
  RecordResourceToRecordResourceRelationMixin as Mixin,
  RelationMixin as Mixin];
