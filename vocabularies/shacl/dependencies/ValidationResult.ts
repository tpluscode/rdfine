import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AbstractResultMixin } from '../AbstractResult';
import { ValidationResultMixin } from '../ValidationResult';

export const ValidationResultDependencies = [
  AbstractResultMixin as Mixin,
  ValidationResultMixin as Mixin];
