import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RelationMixin } from '../lib/Relation.js';
import { RuleMixin } from '../lib/Rule.js';
import { RuleRelationMixin } from '../lib/RuleRelation.js';
import { ThingMixin } from '../lib/Thing.js';

export const RuleRelationBundle = [
  RelationMixin as Mixin,
  RuleMixin as Mixin,
  RuleRelationMixin as Mixin,
  ThingMixin as Mixin];
