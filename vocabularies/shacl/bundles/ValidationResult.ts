import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AbstractResultMixin } from '../lib/AbstractResult';
import { ValidationResultMixin } from '../lib/ValidationResult';

export const ValidationResultBundle = [
  AbstractResultMixin as Mixin,
  ValidationResultMixin as Mixin];
