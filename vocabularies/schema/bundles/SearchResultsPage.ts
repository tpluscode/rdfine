import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../lib/WebPage';
import { SearchResultsPageMixin } from '../lib/SearchResultsPage';

export const SearchResultsPageBundle = [
  WebPageMixin as Mixin,
  SearchResultsPageMixin as Mixin];
