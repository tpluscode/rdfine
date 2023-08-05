import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Atlas<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    Atlas: Factory<Schema.Atlas>;
  }
}

export function AtlasMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Atlas & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AtlasClass extends CreativeWorkMixin(Resource) {
  }
  return AtlasClass as any
}
AtlasMixin.appliesTo = schema.Atlas
AtlasMixin.createFactory = (env: RdfineEnvironment) => createFactory<Atlas>([CreativeWorkMixin, AtlasMixin], { types: [schema.Atlas] }, env)
