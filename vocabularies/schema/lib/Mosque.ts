import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { PlaceOfWorshipMixin } from './PlaceOfWorship.js';

export interface Mosque<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlaceOfWorship<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    Mosque: Factory<Schema.Mosque>;
  }
}

export function MosqueMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Mosque & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MosqueClass extends PlaceOfWorshipMixin(Resource) {
  }
  return MosqueClass as any
}
MosqueMixin.appliesTo = schema.Mosque
MosqueMixin.createFactory = (env: RdfineEnvironment) => createFactory<Mosque>([PlaceOfWorshipMixin, MosqueMixin], { types: [schema.Mosque] }, env)
