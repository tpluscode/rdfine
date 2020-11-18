import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ShapeMixin } from '../lib/Shape';
import { PropertyGroupMixin } from '../lib/PropertyGroup';
import { PropertyShapeMixin } from '../lib/PropertyShape';

export const PropertyShapeBundle = [
  ShapeMixin as Mixin,
  PropertyGroupMixin as Mixin,
  PropertyShapeMixin as Mixin];
