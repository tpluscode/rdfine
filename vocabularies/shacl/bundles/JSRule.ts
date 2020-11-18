import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../lib/JSExecutable';
import { RuleMixin } from '../lib/Rule';
import { JSRuleMixin } from '../lib/JSRule';

export const JSRuleBundle = [
  JSExecutableMixin as Mixin,
  RuleMixin as Mixin,
  JSRuleMixin as Mixin];
