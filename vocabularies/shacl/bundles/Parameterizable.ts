import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParameterizableMixin } from '../lib/Parameterizable';
import { ParameterMixin } from '../lib/Parameter';

export const ParameterizableBundle = [
  ParameterizableMixin as Mixin,
  ParameterMixin as Mixin];
