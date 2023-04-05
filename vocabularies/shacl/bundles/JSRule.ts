import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../lib/JSExecutable';
import { JSRuleMixin } from '../lib/JSRule';
import { RuleMixin } from '../lib/Rule';

export const JSRuleBundle = [
  JSExecutableMixin as Mixin,
  JSRuleMixin as Mixin,
  RuleMixin as Mixin];
