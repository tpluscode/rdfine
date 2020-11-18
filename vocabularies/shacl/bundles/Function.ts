import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParameterizableMixin } from '../lib/Parameterizable';
import { FunctionMixin } from '../lib/Function';

export const FunctionBundle = [
  ParameterizableMixin as Mixin,
  FunctionMixin as Mixin];
