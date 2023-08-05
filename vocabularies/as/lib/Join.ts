import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Join<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

declare global {
  interface AsVocabulary {
    Join: Factory<As.Join>;
  }
}

export function JoinMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Join & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class JoinClass extends ActivityMixin(Resource) {
  }
  return JoinClass as any
}
JoinMixin.appliesTo = as.Join
JoinMixin.createFactory = (env: RdfineEnvironment) => createFactory<Join>([ActivityMixin, JoinMixin], { types: [as.Join] }, env)
