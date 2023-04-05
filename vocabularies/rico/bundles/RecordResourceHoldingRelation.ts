import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { InstantiationMixin } from '../lib/Instantiation';
import { ManagementRelationMixin } from '../lib/ManagementRelation';
import { RecordResourceHoldingRelationMixin } from '../lib/RecordResourceHoldingRelation';
import { RecordResourceMixin } from '../lib/RecordResource';

export const RecordResourceHoldingRelationBundle = [
  AgentMixin as Mixin,
  InstantiationMixin as Mixin,
  ManagementRelationMixin as Mixin,
  RecordResourceHoldingRelationMixin as Mixin,
  RecordResourceMixin as Mixin];
