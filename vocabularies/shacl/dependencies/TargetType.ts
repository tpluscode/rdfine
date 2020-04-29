import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParameterizableMixin } from '../Parameterizable';
import { TargetTypeMixin } from '../TargetType';

export const TargetTypeDependencies = [
  ParameterizableMixin as Mixin,
  TargetTypeMixin as Mixin];
