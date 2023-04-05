import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation';
import { FamilyRelationMixin } from '../lib/FamilyRelation';
import { PersonMixin } from '../lib/Person';

export const FamilyRelationBundle = [
  AgentToAgentRelationMixin as Mixin,
  FamilyRelationMixin as Mixin,
  PersonMixin as Mixin];
