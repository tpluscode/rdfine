import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLAskExecutableMixin } from '../lib/SPARQLAskExecutable';
import { ValidatorMixin } from '../lib/Validator';
import { SPARQLAskValidatorMixin } from '../lib/SPARQLAskValidator';

export const SPARQLAskValidatorBundle = [
  SPARQLAskExecutableMixin as Mixin,
  ValidatorMixin as Mixin,
  SPARQLAskValidatorMixin as Mixin];
