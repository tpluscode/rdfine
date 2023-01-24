import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentControlRelationMixin } from '../lib/AgentControlRelation';
import { AgentHierarchicalRelationMixin } from '../lib/AgentHierarchicalRelation';
import { AgentMixin } from '../lib/Agent';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation';

export const AgentControlRelationBundle = [
  AgentControlRelationMixin as Mixin,
  AgentHierarchicalRelationMixin as Mixin,
  AgentMixin as Mixin,
  AuthorityRelationMixin as Mixin];
