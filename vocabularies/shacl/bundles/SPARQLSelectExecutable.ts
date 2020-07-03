import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLExecutableMixin } from '../SPARQLExecutable';
import { SPARQLSelectExecutableMixin } from '../SPARQLSelectExecutable';

export const SPARQLSelectExecutableBundle = [
  SPARQLExecutableMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin];
