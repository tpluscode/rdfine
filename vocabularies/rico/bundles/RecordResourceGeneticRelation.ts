import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RecordResourceGeneticRelationMixin } from '../lib/RecordResourceGeneticRelation';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RecordResourceToRecordResourceRelationMixin } from '../lib/RecordResourceToRecordResourceRelation';

export const RecordResourceGeneticRelationBundle = [
  RecordResourceGeneticRelationMixin as Mixin,
  RecordResourceMixin as Mixin,
  RecordResourceToRecordResourceRelationMixin as Mixin];
