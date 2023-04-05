import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NodeShapeMixin } from '../lib/NodeShape';
import { PropertyShapeMixin } from '../lib/PropertyShape';
import { RuleMixin } from '../lib/Rule';
import { SeverityMixin } from '../lib/Severity';
import { ShapeMixin } from '../lib/Shape';
import { SPARQLConstraintMixin } from '../lib/SPARQLConstraint';
import { TargetMixin } from '../lib/Target';

export const ShapeBundle = [
  NodeShapeMixin as Mixin,
  PropertyShapeMixin as Mixin,
  RuleMixin as Mixin,
  SeverityMixin as Mixin,
  ShapeMixin as Mixin,
  SPARQLConstraintMixin as Mixin,
  TargetMixin as Mixin];
