import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import WebPageMixin from './WebPage';

export interface SearchResultsPage extends Schema.WebPage, RdfResource {
}

export default function SearchResultsPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SearchResultsPageClass extends WebPageMixin(Resource) implements SearchResultsPage {
  }
  return SearchResultsPageClass
}

class SearchResultsPageImpl extends SearchResultsPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SearchResultsPage>) {
    super(arg, init)
    this.types.add(schema.SearchResultsPage)
  }
}
SearchResultsPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SearchResultsPage)
SearchResultsPageMixin.Class = SearchResultsPageImpl
