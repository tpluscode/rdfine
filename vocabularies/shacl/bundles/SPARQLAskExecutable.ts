import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLAskExecutableMixin } from '../lib/SPARQLAskExecutable';
import { SPARQLExecutableMixin } from '../lib/SPARQLExecutable';

export const SPARQLAskExecutableBundle = [
  SPARQLAskExecutableMixin as Mixin,
  SPARQLExecutableMixin as Mixin];
