import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { WebPageMixin } from './WebPage.js';

export interface SearchResultsPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    SearchResultsPage: Factory<Schema.SearchResultsPage>;
  }
}

export function SearchResultsPageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SearchResultsPage & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SearchResultsPageClass extends WebPageMixin(Resource) {
  }
  return SearchResultsPageClass as any
}
SearchResultsPageMixin.appliesTo = schema.SearchResultsPage
SearchResultsPageMixin.createFactory = (env: RdfineEnvironment) => createFactory<SearchResultsPage>([WebPageMixin, SearchResultsPageMixin], { types: [schema.SearchResultsPage] }, env)
