import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParameterMixin } from '../lib/Parameter';
import { PropertyShapeMixin } from '../lib/PropertyShape';

export const ParameterBundle = [
  ParameterMixin as Mixin,
  PropertyShapeMixin as Mixin];
