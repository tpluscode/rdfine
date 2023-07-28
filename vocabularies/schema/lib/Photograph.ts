import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Photograph<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    Photograph: Factory<Schema.Photograph>;
  }
}

export function PhotographMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Photograph & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PhotographClass extends CreativeWorkMixin(Resource) {
  }
  return PhotographClass as any
}
PhotographMixin.appliesTo = schema.Photograph
PhotographMixin.createFactory = (env: RdfineEnvironment) => createFactory<Photograph>([CreativeWorkMixin, PhotographMixin], { types: [schema.Photograph] }, env)
