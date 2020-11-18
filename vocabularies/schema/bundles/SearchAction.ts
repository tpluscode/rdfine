import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { SearchActionMixin } from '../lib/SearchAction';

export const SearchActionBundle = [
  ActionMixin as Mixin,
  SearchActionMixin as Mixin];
