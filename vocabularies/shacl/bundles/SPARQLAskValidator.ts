import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLAskExecutableMixin } from '../lib/SPARQLAskExecutable';
import { SPARQLAskValidatorMixin } from '../lib/SPARQLAskValidator';
import { ValidatorMixin } from '../lib/Validator';

export const SPARQLAskValidatorBundle = [
  SPARQLAskExecutableMixin as Mixin,
  SPARQLAskValidatorMixin as Mixin,
  ValidatorMixin as Mixin];
