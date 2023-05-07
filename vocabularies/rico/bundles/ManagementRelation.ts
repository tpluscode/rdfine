import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation.js';
import { InstantiationMixin } from '../lib/Instantiation.js';
import { ManagementRelationMixin } from '../lib/ManagementRelation.js';
import { RecordResourceMixin } from '../lib/RecordResource.js';

export const ManagementRelationBundle = [
  AgentMixin as Mixin,
  AuthorityRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  ManagementRelationMixin as Mixin,
  RecordResourceMixin as Mixin];
