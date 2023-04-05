import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageMixin } from './WebPage.js';

export interface SearchResultsPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, RdfResource<D> {
}

export function SearchResultsPageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SearchResultsPage> & RdfResourceCore> & Base {
  @namespace(schema)
  class SearchResultsPageClass extends WebPageMixin(Resource) implements Partial<SearchResultsPage> {
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

export const fromPointer = createFactory<SearchResultsPage>([WebPageMixin, SearchResultsPageMixin], { types: [schema.SearchResultsPage] });
