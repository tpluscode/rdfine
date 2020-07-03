import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../JSExecutable';
import { RuleMixin } from '../Rule';
import { JSRuleMixin } from '../JSRule';

export const JSRuleBundle = [
  JSExecutableMixin as Mixin,
  RuleMixin as Mixin,
  JSRuleMixin as Mixin];
