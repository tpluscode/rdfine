import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLExecutableMixin } from '../lib/SPARQLExecutable';
import { SPARQLSelectExecutableMixin } from '../lib/SPARQLSelectExecutable';

export const SPARQLSelectExecutableBundle = [
  SPARQLExecutableMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin];
