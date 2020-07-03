import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FunctionMixin } from '../Function';
import { SPARQLAskExecutableMixin } from '../SPARQLAskExecutable';
import { SPARQLSelectExecutableMixin } from '../SPARQLSelectExecutable';
import { SPARQLFunctionMixin } from '../SPARQLFunction';

export const SPARQLFunctionBundle = [
  FunctionMixin as Mixin,
  SPARQLAskExecutableMixin as Mixin,
  SPARQLSelectExecutableMixin as Mixin,
  SPARQLFunctionMixin as Mixin];
