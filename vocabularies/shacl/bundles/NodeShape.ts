import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ShapeMixin } from '../lib/Shape';
import { NodeShapeMixin } from '../lib/NodeShape';

export const NodeShapeBundle = [
  ShapeMixin as Mixin,
  NodeShapeMixin as Mixin];
