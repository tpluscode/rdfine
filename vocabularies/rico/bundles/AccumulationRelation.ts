import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccumulationRelationMixin } from '../lib/AccumulationRelation.js';
import { AgentMixin } from '../lib/Agent.js';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';

export const AccumulationRelationBundle = [
  AccumulationRelationMixin as Mixin,
  AgentMixin as Mixin,
  AgentOriginationRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  RecordResourceMixin as Mixin];
