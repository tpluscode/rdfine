import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ShapeMixin } from '../Shape';
import { NodeShapeMixin } from '../NodeShape';
import { NodeKindMixin } from '../NodeKind';

export const NodeShapeBundle = [
  ShapeMixin as Mixin,
  NodeShapeMixin as Mixin,
  NodeKindMixin as Mixin];
