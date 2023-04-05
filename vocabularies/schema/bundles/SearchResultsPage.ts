import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SearchResultsPageMixin } from '../lib/SearchResultsPage';
import { WebPageMixin } from '../lib/WebPage';

export const SearchResultsPageBundle = [
  SearchResultsPageMixin as Mixin,
  WebPageMixin as Mixin];
