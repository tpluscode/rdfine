import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { SearchActionMixin } from '../SearchAction';

export const SearchActionDependencies = [
  ActionMixin as Mixin,
  SearchActionMixin as Mixin];
