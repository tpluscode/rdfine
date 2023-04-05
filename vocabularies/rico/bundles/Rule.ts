import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AgentMixin } from '../lib/Agent';
import { RecordResourceMixin } from '../lib/RecordResource';
import { RuleMixin } from '../lib/Rule';
import { RuleRelationMixin } from '../lib/RuleRelation';
import { RuleTypeMixin } from '../lib/RuleType';
import { ThingMixin } from '../lib/Thing';
import { TitleMixin } from '../lib/Title';

export const RuleBundle = [
  AgentMixin as Mixin,
  RecordResourceMixin as Mixin,
  RuleMixin as Mixin,
  RuleRelationMixin as Mixin,
  RuleTypeMixin as Mixin,
  ThingMixin as Mixin,
  TitleMixin as Mixin];
