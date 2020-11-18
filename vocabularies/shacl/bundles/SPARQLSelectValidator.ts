import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLSelectExecutableMixin } from '../lib/SPARQLSelectExecutable';
import { ValidatorMixin } from '../lib/Validator';
import { ResultAnnotationMixin } from '../lib/ResultAnnotation';
import { SPARQLSelectValidatorMixin } from '../lib/SPARQLSelectValidator';

export const SPARQLSelectValidatorBundle = [
  SPARQLSelectExecutableMixin as Mixin,
  ValidatorMixin as Mixin,
  ResultAnnotationMixin as Mixin,
  SPARQLSelectValidatorMixin as Mixin];
