import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLExecutableMixin } from '../lib/SPARQLExecutable';
import { SPARQLAskExecutableMixin } from '../lib/SPARQLAskExecutable';

export const SPARQLAskExecutableBundle = [
  SPARQLExecutableMixin as Mixin,
  SPARQLAskExecutableMixin as Mixin];
