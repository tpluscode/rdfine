import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface TheaterEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    TheaterEvent: Factory<Schema.TheaterEvent>;
  }
}

export function TheaterEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TheaterEvent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TheaterEventClass extends EventMixin(Resource) {
  }
  return TheaterEventClass as any
}
TheaterEventMixin.appliesTo = schema.TheaterEvent
TheaterEventMixin.createFactory = (env: RdfineEnvironment) => createFactory<TheaterEvent>([EventMixin, TheaterEventMixin], { types: [schema.TheaterEvent] }, env)
