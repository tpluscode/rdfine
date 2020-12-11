import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SuggestionMixin } from '../lib/Suggestion';
import { GraphUpdateMixin } from '../lib/GraphUpdate';

export const GraphUpdateBundle = [
  SuggestionMixin as Mixin,
  GraphUpdateMixin as Mixin];
