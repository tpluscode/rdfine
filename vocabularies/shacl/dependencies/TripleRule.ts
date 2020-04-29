import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RuleMixin } from '../Rule';
import { TripleRuleMixin } from '../TripleRule';

export const TripleRuleDependencies = [
  RuleMixin as Mixin,
  TripleRuleMixin as Mixin];
