import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLExecutableMixin } from '../lib/SPARQLExecutable';
import { SPARQLConstructExecutableMixin } from '../lib/SPARQLConstructExecutable';

export const SPARQLConstructExecutableBundle = [
  SPARQLExecutableMixin as Mixin,
  SPARQLConstructExecutableMixin as Mixin];
