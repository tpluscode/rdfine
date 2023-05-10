import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation.js';
import { KnowingOfRelationMixin } from '../lib/KnowingOfRelation.js';
import { PersonMixin } from '../lib/Person.js';

export const KnowingOfRelationBundle = [
  AgentToAgentRelationMixin as Mixin,
  KnowingOfRelationMixin as Mixin,
  PersonMixin as Mixin];
