import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLSelectExecutableMixin } from '../SPARQLSelectExecutable';
import { ValidatorMixin } from '../Validator';
import { ResultAnnotationMixin } from '../ResultAnnotation';
import { SPARQLSelectValidatorMixin } from '../SPARQLSelectValidator';

export const SPARQLSelectValidatorBundle = [
  SPARQLSelectExecutableMixin as Mixin,
  ValidatorMixin as Mixin,
  ResultAnnotationMixin as Mixin,
  SPARQLSelectValidatorMixin as Mixin];
