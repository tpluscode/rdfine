import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLExecutableMixin } from '../SPARQLExecutable';
import { SPARQLAskExecutableMixin } from '../SPARQLAskExecutable';

export const SPARQLAskExecutableDependencies = [
  SPARQLExecutableMixin as Mixin,
  SPARQLAskExecutableMixin as Mixin];
