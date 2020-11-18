import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { JSExecutableMixin } from '../lib/JSExecutable';
import { ValidatorMixin } from '../lib/Validator';
import { JSValidatorMixin } from '../lib/JSValidator';

export const JSValidatorBundle = [
  JSExecutableMixin as Mixin,
  ValidatorMixin as Mixin,
  JSValidatorMixin as Mixin];
