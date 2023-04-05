import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GraphUpdateMixin } from '../lib/GraphUpdate';
import { SuggestionMixin } from '../lib/Suggestion';

export const GraphUpdateBundle = [
  GraphUpdateMixin as Mixin,
  SuggestionMixin as Mixin];
