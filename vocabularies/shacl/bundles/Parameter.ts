import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PropertyShapeMixin } from '../PropertyShape';
import { ParameterMixin } from '../Parameter';

export const ParameterBundle = [
  PropertyShapeMixin as Mixin,
  ParameterMixin as Mixin];
