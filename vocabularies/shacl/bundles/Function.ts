import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FunctionMixin } from '../lib/Function';
import { ParameterizableMixin } from '../lib/Parameterizable';

export const FunctionBundle = [
  FunctionMixin as Mixin,
  ParameterizableMixin as Mixin];
