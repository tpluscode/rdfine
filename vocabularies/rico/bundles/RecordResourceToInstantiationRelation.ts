import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { InstantiationMixin } from '../lib/Instantiation';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RecordResourceToInstantiationRelationMixin } from '../lib/RecordResourceToInstantiationRelation';
import { RelationMixin } from '../lib/Relation';

export const RecordResourceToInstantiationRelationBundle = [
  InstantiationMixin as Mixin,
  RecordResourceMixin as Mixin,
  RecordResourceToInstantiationRelationMixin as Mixin,
  RelationMixin as Mixin];
