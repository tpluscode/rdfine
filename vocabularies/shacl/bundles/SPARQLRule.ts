import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RuleMixin } from '../Rule';
import { SPARQLConstructExecutableMixin } from '../SPARQLConstructExecutable';
import { SPARQLRuleMixin } from '../SPARQLRule';

export const SPARQLRuleBundle = [
  RuleMixin as Mixin,
  SPARQLConstructExecutableMixin as Mixin,
  SPARQLRuleMixin as Mixin];
