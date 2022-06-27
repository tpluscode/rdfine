import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RuleMixin } from '../lib/Rule';
import { ShapeMixin } from '../lib/Shape';

export const RuleBundle = [
  RuleMixin as Mixin,
  ShapeMixin as Mixin];
