import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLSelectExecutableMixin } from '../lib/SPARQLSelectExecutable';
import { SPARQLConstraintMixin } from '../lib/SPARQLConstraint';

export const SPARQLConstraintBundle = [
  SPARQLSelectExecutableMixin as Mixin,
  SPARQLConstraintMixin as Mixin];
