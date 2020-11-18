import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLExecutableMixin } from '../lib/SPARQLExecutable';
import { SPARQLUpdateExecutableMixin } from '../lib/SPARQLUpdateExecutable';

export const SPARQLUpdateExecutableBundle = [
  SPARQLExecutableMixin as Mixin,
  SPARQLUpdateExecutableMixin as Mixin];
