import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RuleMixin } from '../lib/Rule';
import { TripleRuleMixin } from '../lib/TripleRule';

export const TripleRuleBundle = [
  RuleMixin as Mixin,
  TripleRuleMixin as Mixin];
