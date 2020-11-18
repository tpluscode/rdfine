import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ShapeMixin } from '../lib/Shape';
import { RuleMixin } from '../lib/Rule';

export const RuleBundle = [
  ShapeMixin as Mixin,
  RuleMixin as Mixin];
