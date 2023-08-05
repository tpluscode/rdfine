import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Read<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

declare global {
  interface AsVocabulary {
    Read: Factory<As.Read>;
  }
}

export function ReadMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Read & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class ReadClass extends ActivityMixin(Resource) {
  }
  return ReadClass as any
}
ReadMixin.appliesTo = as.Read
ReadMixin.createFactory = (env: RdfineEnvironment) => createFactory<Read>([ActivityMixin, ReadMixin], { types: [as.Read] }, env)
