import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ScriptMixin } from '../lib/Script';
import { ScriptSuggestionGeneratorMixin } from '../lib/ScriptSuggestionGenerator';
import { SuggestionGeneratorMixin } from '../lib/SuggestionGenerator';

export const ScriptSuggestionGeneratorBundle = [
  ScriptMixin as Mixin,
  ScriptSuggestionGeneratorMixin as Mixin,
  SuggestionGeneratorMixin as Mixin];
