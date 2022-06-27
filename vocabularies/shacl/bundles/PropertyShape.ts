import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PropertyGroupMixin } from '../lib/PropertyGroup';
import { PropertyShapeMixin } from '../lib/PropertyShape';
import { ShapeMixin } from '../lib/Shape';

export const PropertyShapeBundle = [
  PropertyGroupMixin as Mixin,
  PropertyShapeMixin as Mixin,
  ShapeMixin as Mixin];
