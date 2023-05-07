import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { ManagementRelationMixin } from '../lib/ManagementRelation.js';
import { RecordResourceHoldingRelationMixin } from '../lib/RecordResourceHoldingRelation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';

export const RecordResourceHoldingRelationBundle = [
  AgentMixin as Mixin,
  InstantiationMixin as Mixin,
  ManagementRelationMixin as Mixin,
  RecordResourceHoldingRelationMixin as Mixin,
  RecordResourceMixin as Mixin];
