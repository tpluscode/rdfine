import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PropertyShapeMixin } from '../lib/PropertyShape';
import { ParameterMixin } from '../lib/Parameter';

export const ParameterBundle = [
  PropertyShapeMixin as Mixin,
  ParameterMixin as Mixin];
