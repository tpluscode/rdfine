import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLExecutableMixin } from '../SPARQLExecutable';
import { SPARQLSelectExecutableMixin } from '../SPARQLSelectExecutable';

export const SPARQLSelectExecutableDependencies = [
  SPARQLExecutableMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin];
