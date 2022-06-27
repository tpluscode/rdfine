import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FunctionMixin } from '../lib/Function';
import { SPARQLAskExecutableMixin } from '../lib/SPARQLAskExecutable';
import { SPARQLFunctionMixin } from '../lib/SPARQLFunction';
import { SPARQLSelectExecutableMixin } from '../lib/SPARQLSelectExecutable';

export const SPARQLFunctionBundle = [
  FunctionMixin as Mixin,
  SPARQLAskExecutableMixin as Mixin,
  SPARQLFunctionMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin];
