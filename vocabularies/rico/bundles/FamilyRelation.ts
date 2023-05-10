import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentToAgentRelationMixin } from '../lib/AgentToAgentRelation.js';
import { FamilyRelationMixin } from '../lib/FamilyRelation.js';
import { PersonMixin } from '../lib/Person.js';

export const FamilyRelationBundle = [
  AgentToAgentRelationMixin as Mixin,
  FamilyRelationMixin as Mixin,
  PersonMixin as Mixin];
