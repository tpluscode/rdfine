import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NodeShapeMixin } from '../lib/NodeShape';
import { ShapeMixin } from '../lib/Shape';

export const NodeShapeBundle = [
  NodeShapeMixin as Mixin,
  ShapeMixin as Mixin];
