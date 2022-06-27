import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SPARQLUpdateSuggestionGeneratorMixin } from '../lib/SPARQLUpdateSuggestionGenerator';
import { SuggestionGeneratorMixin } from '../lib/SuggestionGenerator';

export const SPARQLUpdateSuggestionGeneratorBundle = [
  SPARQLUpdateSuggestionGeneratorMixin as Mixin,
  SuggestionGeneratorMixin as Mixin];
