import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent.js';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation.js';
import { RelationMixin } from '../lib/Relation.js';
import { ThingMixin } from '../lib/Thing.js';

export const AuthorityRelationBundle = [
  AgentMixin as Mixin,
  AuthorityRelationMixin as Mixin,
  RelationMixin as Mixin,
  ThingMixin as Mixin];
