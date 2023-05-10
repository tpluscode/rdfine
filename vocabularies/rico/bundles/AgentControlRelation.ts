import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentControlRelationMixin } from '../lib/AgentControlRelation.js';
import { AgentHierarchicalRelationMixin } from '../lib/AgentHierarchicalRelation.js';
import { AgentMixin } from '../lib/Agent.js';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation.js';

export const AgentControlRelationBundle = [
  AgentControlRelationMixin as Mixin,
  AgentHierarchicalRelationMixin as Mixin,
  AgentMixin as Mixin,
  AuthorityRelationMixin as Mixin];
