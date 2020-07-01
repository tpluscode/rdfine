import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLAskExecutableMixin } from '../SPARQLAskExecutable';
import { ValidatorMixin } from '../Validator';
import { SPARQLAskValidatorMixin } from '../SPARQLAskValidator';

export const SPARQLAskValidatorBundle = [
  SPARQLAskExecutableMixin as Mixin,
  ValidatorMixin as Mixin,
  SPARQLAskValidatorMixin as Mixin];
