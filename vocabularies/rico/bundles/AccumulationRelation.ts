import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AccumulationRelationMixin } from '../lib/AccumulationRelation';
import { AgentMixin } from '../lib/Agent';
import { AgentOriginationRelationMixin } from '../lib/AgentOriginationRelation';
import { InstantiationMixin } from '../lib/Instantiation';
import { RecordResourceMixin } from '../lib/RecordResource';

export const AccumulationRelationBundle = [
  AccumulationRelationMixin as Mixin,
  AgentMixin as Mixin,
  AgentOriginationRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  RecordResourceMixin as Mixin];
