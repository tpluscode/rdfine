import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { ProvenanceRelationMixin } from '../lib/ProvenanceRelation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';

export const AgentOriginationRelationBundle = [
  AgentMixin as Mixin,
  AgentOriginationRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  ProvenanceRelationMixin as Mixin,
  RecordResourceMixin as Mixin];
