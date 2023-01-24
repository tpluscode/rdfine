import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActivityMixin } from '../lib/Activity';
import { AgentMixin } from '../lib/Agent';
import { InstantiationMixin } from '../lib/Instantiation';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RelationMixin } from '../lib/Relation';

export const ProvenanceRelationBundle = [
  ActivityMixin as Mixin,
  AgentMixin as Mixin,
  InstantiationMixin as Mixin,
  ProvenanceRelationMixin as Mixin,
  RecordResourceMixin as Mixin,
  RelationMixin as Mixin];
