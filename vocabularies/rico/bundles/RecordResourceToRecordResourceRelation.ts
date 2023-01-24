import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RecordResourceToRecordResourceRelationMixin } from '../lib/RecordResourceToRecordResourceRelation';
import { RelationMixin } from '../lib/Relation';

export const RecordResourceToRecordResourceRelationBundle = [
  RecordResourceMixin as Mixin,
  RecordResourceToRecordResourceRelationMixin as Mixin,
  RelationMixin as Mixin];
