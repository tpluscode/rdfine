import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PropertyShapeMixin } from '../PropertyShape';
import { ParameterMixin } from '../Parameter';

export const ParameterDependencies = [
  PropertyShapeMixin as Mixin,
  ParameterMixin as Mixin];
