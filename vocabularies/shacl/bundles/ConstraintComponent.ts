import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParameterizableMixin } from '../lib/Parameterizable';
import { ValidatorMixin } from '../lib/Validator';
import { ConstraintComponentMixin } from '../lib/ConstraintComponent';

export const ConstraintComponentBundle = [
  ParameterizableMixin as Mixin,
  ValidatorMixin as Mixin,
  ConstraintComponentMixin as Mixin];
