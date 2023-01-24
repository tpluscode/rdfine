import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RelationMixin } from '../lib/Relation';
import { RuleMixin } from '../lib/Rule';
import { RuleRelationMixin } from '../lib/RuleRelation';
import { ThingMixin } from '../lib/Thing';

export const RuleRelationBundle = [
  RelationMixin as Mixin,
  RuleMixin as Mixin,
  RuleRelationMixin as Mixin,
  ThingMixin as Mixin];
