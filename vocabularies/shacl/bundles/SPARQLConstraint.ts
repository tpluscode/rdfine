import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLSelectExecutableMixin } from '../SPARQLSelectExecutable';
import { SPARQLConstraintMixin } from '../SPARQLConstraint';

export const SPARQLConstraintBundle = [
  SPARQLSelectExecutableMixin as Mixin,
  SPARQLConstraintMixin as Mixin];
