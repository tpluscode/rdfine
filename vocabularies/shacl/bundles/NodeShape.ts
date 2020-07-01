import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ShapeMixin } from '../Shape';
import { NodeShapeMixin } from '../NodeShape';

export const NodeShapeBundle = [
  ShapeMixin as Mixin,
  NodeShapeMixin as Mixin];
