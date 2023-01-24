import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation';
import { InstantiationMixin } from '../lib/Instantiation';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation';
import { RecordResourceMixin } from '../lib/RecordResource';

export const AgentOriginationRelationBundle = [
  AgentMixin as Mixin,
  AgentOriginationRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  ProvenanceRelationMixin as Mixin,
  RecordResourceMixin as Mixin];
