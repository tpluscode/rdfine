import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../lib/JSExecutable';
import { JSValidatorMixin } from '../lib/JSValidator';
import { ValidatorMixin } from '../lib/Validator';

export const JSValidatorBundle = [
  JSExecutableMixin as Mixin,
  JSValidatorMixin as Mixin,
  ValidatorMixin as Mixin];
