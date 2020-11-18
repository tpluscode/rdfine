import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParameterizableMixin } from '../lib/Parameterizable';
import { TargetTypeMixin } from '../lib/TargetType';

export const TargetTypeBundle = [
  ParameterizableMixin as Mixin,
  TargetTypeMixin as Mixin];
