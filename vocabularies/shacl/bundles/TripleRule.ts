import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RuleMixin } from '../Rule';
import { TripleRuleMixin } from '../TripleRule';

export const TripleRuleBundle = [
  RuleMixin as Mixin,
  TripleRuleMixin as Mixin];
