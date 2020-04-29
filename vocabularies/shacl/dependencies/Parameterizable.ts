import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParameterMixin } from '../Parameter';
import { ParameterizableMixin } from '../Parameterizable';

export const ParameterizableDependencies = [
  ParameterMixin as Mixin,
  ParameterizableMixin as Mixin];
