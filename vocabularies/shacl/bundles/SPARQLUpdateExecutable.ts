import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLExecutableMixin } from '../SPARQLExecutable';
import { SPARQLUpdateExecutableMixin } from '../SPARQLUpdateExecutable';

export const SPARQLUpdateExecutableBundle = [
  SPARQLExecutableMixin as Mixin,
  SPARQLUpdateExecutableMixin as Mixin];
