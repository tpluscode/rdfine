import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLConstraintMixin } from '../lib/SPARQLConstraint';
import { SPARQLSelectExecutableMixin } from '../lib/SPARQLSelectExecutable';

export const SPARQLConstraintBundle = [
  SPARQLConstraintMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin];
