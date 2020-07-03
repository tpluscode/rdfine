import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ShapeMixin } from '../Shape';
import { PropertyGroupMixin } from '../PropertyGroup';
import { PropertyShapeMixin } from '../PropertyShape';

export const PropertyShapeBundle = [
  ShapeMixin as Mixin,
  PropertyGroupMixin as Mixin,
  PropertyShapeMixin as Mixin];
