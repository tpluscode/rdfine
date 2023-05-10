import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RecordResourceGeneticRelationMixin } from '../lib/RecordResourceGeneticRelation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';
import { RecordResourceToRecordResourceRelationMixin } from '../lib/RecordResourceToRecordResourceRelation.js';

export const RecordResourceGeneticRelationBundle = [
  RecordResourceGeneticRelationMixin as Mixin,
  RecordResourceMixin as Mixin,
  RecordResourceToRecordResourceRelationMixin as Mixin];
