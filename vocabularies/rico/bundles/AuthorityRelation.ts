import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { AuthorityRelationMixin } from '../lib/AuthorityRelation';
import { RelationMixin } from '../lib/Relation';
import { ThingMixin } from '../lib/Thing';

export const AuthorityRelationBundle = [
  AgentMixin as Mixin,
  AuthorityRelationMixin as Mixin,
  RelationMixin as Mixin,
  ThingMixin as Mixin];
