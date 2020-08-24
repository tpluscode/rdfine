import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ShapeMixin } from '../Shape';
import { PropertyShapeMixin } from '../PropertyShape';
import { RuleMixin } from '../Rule';
import { SeverityMixin } from '../Severity';
import { SPARQLConstraintMixin } from '../SPARQLConstraint';
import { TargetMixin } from '../Target';

export const ShapeBundle = [
  ShapeMixin as Mixin,
  PropertyShapeMixin as Mixin,
  RuleMixin as Mixin,
  SeverityMixin as Mixin,
  SPARQLConstraintMixin as Mixin,
  TargetMixin as Mixin];
