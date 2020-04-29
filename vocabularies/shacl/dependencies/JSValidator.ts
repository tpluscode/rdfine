import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../JSExecutable';
import { ValidatorMixin } from '../Validator';
import { JSValidatorMixin } from '../JSValidator';

export const JSValidatorDependencies = [
  JSExecutableMixin as Mixin,
  ValidatorMixin as Mixin,
  JSValidatorMixin as Mixin];
