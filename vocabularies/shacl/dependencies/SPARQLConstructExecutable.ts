import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLExecutableMixin } from '../SPARQLExecutable';
import { SPARQLConstructExecutableMixin } from '../SPARQLConstructExecutable';

export const SPARQLConstructExecutableDependencies = [
  SPARQLExecutableMixin as Mixin,
  SPARQLConstructExecutableMixin as Mixin];
