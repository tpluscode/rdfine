import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface PublicationIssue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  issueNumber: number | string | undefined;
  pageEnd: number | string | undefined;
  pageStart: number | string | undefined;
  pagination: string | undefined;
}

declare global {
  interface SchemaVocabulary {
    PublicationIssue: Factory<Schema.PublicationIssue>;
  }
}

export function PublicationIssueMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PublicationIssue & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PublicationIssueClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.literal()
    issueNumber: number | string | undefined;
    @rdfine.property.literal()
    pageEnd: number | string | undefined;
    @rdfine.property.literal()
    pageStart: number | string | undefined;
    @rdfine.property.literal()
    pagination: string | undefined;
  }
  return PublicationIssueClass as any
}
PublicationIssueMixin.appliesTo = schema.PublicationIssue
PublicationIssueMixin.createFactory = (env: RdfineEnvironment) => createFactory<PublicationIssue>([CreativeWorkMixin, PublicationIssueMixin], { types: [schema.PublicationIssue] }, env)
