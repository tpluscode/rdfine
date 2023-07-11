import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { WebPageMixin } from './WebPage.js';

export interface FAQPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, rdfine.RdfResource<D> {
}

export function FAQPageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FAQPage & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FAQPageClass extends WebPageMixin(Resource) {
  }
  return FAQPageClass as any
}
FAQPageMixin.appliesTo = schema.FAQPage

export const factory = (env: RdfineEnvironment) => createFactory<FAQPage>([WebPageMixin, FAQPageMixin], { types: [schema.FAQPage] }, env);
