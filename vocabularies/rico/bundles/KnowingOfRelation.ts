import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation';
import { KnowingOfRelationMixin } from '../lib/KnowingOfRelation';
import { PersonMixin } from '../lib/Person';

export const KnowingOfRelationBundle = [
  AgentToAgentRelationMixin as Mixin,
  KnowingOfRelationMixin as Mixin,
  PersonMixin as Mixin];
