import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParameterMixin } from '../Parameter';
import { ParameterizableMixin } from '../Parameterizable';

export const ParameterizableBundle = [
  ParameterMixin as Mixin,
  ParameterizableMixin as Mixin];
