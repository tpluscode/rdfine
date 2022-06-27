import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ResultAnnotationMixin } from '../lib/ResultAnnotation';
import { SPARQLSelectExecutableMixin } from '../lib/SPARQLSelectExecutable';
import { SPARQLSelectValidatorMixin } from '../lib/SPARQLSelectValidator';
import { ValidatorMixin } from '../lib/Validator';

export const SPARQLSelectValidatorBundle = [
  ResultAnnotationMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin,
  SPARQLSelectValidatorMixin as Mixin,
  ValidatorMixin as Mixin];
