import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface SearchResultsPage<ID extends ResourceNode = ResourceNode> extends Schema.WebPage<ID>, RdfResource<ID> {
}

export function SearchResultsPageMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [SearchResultsPageMixin, WebPageMixin];
}
SearchResultsPageMixin.appliesTo = schema.SearchResultsPage
SearchResultsPageMixin.Class = SearchResultsPageImpl
