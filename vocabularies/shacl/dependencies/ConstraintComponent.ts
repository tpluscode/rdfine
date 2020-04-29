import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ParameterizableMixin } from '../Parameterizable';
import { ValidatorMixin } from '../Validator';
import { ConstraintComponentMixin } from '../ConstraintComponent';

export const ConstraintComponentDependencies = [
  ParameterizableMixin as Mixin,
  ValidatorMixin as Mixin,
  ConstraintComponentMixin as Mixin];
