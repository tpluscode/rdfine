import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PropertyShapeMixin } from '../PropertyShape';
import { RuleMixin } from '../Rule';
import { SeverityMixin } from '../Severity';
import { SPARQLConstraintMixin } from '../SPARQLConstraint';
import { TargetMixin } from '../Target';
import { ShapeMixin } from '../Shape';

export const ShapeBundle = [
  PropertyShapeMixin as Mixin,
  RuleMixin as Mixin,
  SeverityMixin as Mixin,
  SPARQLConstraintMixin as Mixin,
  TargetMixin as Mixin,
  ShapeMixin as Mixin];
