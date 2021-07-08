import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScriptMixin } from '../lib/Script';
import { SuggestionGeneratorMixin } from '../lib/SuggestionGenerator';
import { ScriptSuggestionGeneratorMixin } from '../lib/ScriptSuggestionGenerator';

export const ScriptSuggestionGeneratorBundle = [
  ScriptMixin as Mixin,
  SuggestionGeneratorMixin as Mixin,
  ScriptSuggestionGeneratorMixin as Mixin];
