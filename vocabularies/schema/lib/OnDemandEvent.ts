import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { PublicationEventMixin } from './PublicationEvent.js';

export interface OnDemandEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PublicationEvent<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    OnDemandEvent: Factory<Schema.OnDemandEvent>;
  }
}

export function OnDemandEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OnDemandEvent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OnDemandEventClass extends PublicationEventMixin(Resource) {
  }
  return OnDemandEventClass as any
}
OnDemandEventMixin.appliesTo = schema.OnDemandEvent
OnDemandEventMixin.createFactory = (env: RdfineEnvironment) => createFactory<OnDemandEvent>([PublicationEventMixin, OnDemandEventMixin], { types: [schema.OnDemandEvent] }, env)
