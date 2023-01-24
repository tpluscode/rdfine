import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RuleMixin } from '../lib/Rule';
import { RuleTypeMixin } from '../lib/RuleType';
import { TypeMixin } from '../lib/Type';

export const RuleTypeBundle = [
  RuleMixin as Mixin,
  RuleTypeMixin as Mixin,
  TypeMixin as Mixin];
