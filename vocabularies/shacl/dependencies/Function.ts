import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParameterizableMixin } from '../Parameterizable';
import { FunctionMixin } from '../Function';

export const FunctionDependencies = [
  ParameterizableMixin as Mixin,
  FunctionMixin as Mixin];
