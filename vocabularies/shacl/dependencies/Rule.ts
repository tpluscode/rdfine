import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ShapeMixin } from '../Shape';
import { RuleMixin } from '../Rule';

export const RuleDependencies = [
  ShapeMixin as Mixin,
  RuleMixin as Mixin];
