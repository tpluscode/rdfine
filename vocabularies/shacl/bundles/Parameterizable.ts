import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParameterMixin } from '../lib/Parameter';
import { ParameterizableMixin } from '../lib/Parameterizable';

export const ParameterizableBundle = [
  ParameterMixin as Mixin,
  ParameterizableMixin as Mixin];
