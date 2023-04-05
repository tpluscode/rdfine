import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLConstructExecutableMixin } from '../lib/SPARQLConstructExecutable';
import { SPARQLExecutableMixin } from '../lib/SPARQLExecutable';

export const SPARQLConstructExecutableBundle = [
  SPARQLConstructExecutableMixin as Mixin,
  SPARQLExecutableMixin as Mixin];
