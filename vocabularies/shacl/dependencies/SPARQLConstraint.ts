import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLSelectExecutableMixin } from '../SPARQLSelectExecutable';
import { SPARQLConstraintMixin } from '../SPARQLConstraint';

export const SPARQLConstraintDependencies = [
  SPARQLSelectExecutableMixin as Mixin,
  SPARQLConstraintMixin as Mixin];
