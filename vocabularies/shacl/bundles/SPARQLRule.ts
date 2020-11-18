import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RuleMixin } from '../lib/Rule';
import { SPARQLConstructExecutableMixin } from '../lib/SPARQLConstructExecutable';
import { SPARQLRuleMixin } from '../lib/SPARQLRule';

export const SPARQLRuleBundle = [
  RuleMixin as Mixin,
  SPARQLConstructExecutableMixin as Mixin,
  SPARQLRuleMixin as Mixin];
