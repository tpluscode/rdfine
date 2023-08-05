import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Language<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    Language: Factory<Schema.Language>;
  }
}

export function LanguageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Language & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LanguageClass extends IntangibleMixin(Resource) {
  }
  return LanguageClass as any
}
LanguageMixin.appliesTo = schema.Language
LanguageMixin.createFactory = (env: RdfineEnvironment) => createFactory<Language>([IntangibleMixin, LanguageMixin], { types: [schema.Language] }, env)
