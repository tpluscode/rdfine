import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConstraintComponentMixin } from '../lib/ConstraintComponent';
import { ParameterizableMixin } from '../lib/Parameterizable';
import { ValidatorMixin } from '../lib/Validator';

export const ConstraintComponentBundle = [
  ConstraintComponentMixin as Mixin,
  ParameterizableMixin as Mixin,
  ValidatorMixin as Mixin];
