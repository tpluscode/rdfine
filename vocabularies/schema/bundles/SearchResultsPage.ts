import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { WebPageMixin } from '../WebPage';
import { SearchResultsPageMixin } from '../SearchResultsPage';

export const SearchResultsPageBundle = [
  WebPageMixin as Mixin,
  SearchResultsPageMixin as Mixin];
