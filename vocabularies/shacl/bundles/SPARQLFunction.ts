import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FunctionMixin } from '../lib/Function';
import { SPARQLAskExecutableMixin } from '../lib/SPARQLAskExecutable';
import { SPARQLSelectExecutableMixin } from '../lib/SPARQLSelectExecutable';
import { SPARQLFunctionMixin } from '../lib/SPARQLFunction';

export const SPARQLFunctionBundle = [
  FunctionMixin as Mixin,
  SPARQLAskExecutableMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin,
  SPARQLFunctionMixin as Mixin];
