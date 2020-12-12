import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SuggestionGeneratorMixin } from '../lib/SuggestionGenerator';
import { SPARQLUpdateSuggestionGeneratorMixin } from '../lib/SPARQLUpdateSuggestionGenerator';

export const SPARQLUpdateSuggestionGeneratorBundle = [
  SuggestionGeneratorMixin as Mixin,
  SPARQLUpdateSuggestionGeneratorMixin as Mixin];
