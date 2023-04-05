import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation';
import { InstantiationMixin } from '../lib/Instantiation';
import { ManagementRelationMixin } from '../lib/ManagementRelation';
import { RecordResourceMixin } from '../lib/RecordResource';

export const ManagementRelationBundle = [
  AgentMixin as Mixin,
  AuthorityRelationMixin as Mixin,
  InstantiationMixin as Mixin,
  ManagementRelationMixin as Mixin,
  RecordResourceMixin as Mixin];
