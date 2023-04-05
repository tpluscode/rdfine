import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation';
import { KnowingRelationMixin } from '../lib/KnowingRelation';
import { PersonMixin } from '../lib/Person';

export const KnowingRelationBundle = [
  AgentToAgentRelationMixin as Mixin,
  KnowingRelationMixin as Mixin,
  PersonMixin as Mixin];
