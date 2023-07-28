import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Listen<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

declare global {
  interface AsVocabulary {
    Listen: Factory<As.Listen>;
  }
}

export function ListenMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Listen & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class ListenClass extends ActivityMixin(Resource) {
  }
  return ListenClass as any
}
ListenMixin.appliesTo = as.Listen
ListenMixin.createFactory = (env: RdfineEnvironment) => createFactory<Listen>([ActivityMixin, ListenMixin], { types: [as.Listen] }, env)
