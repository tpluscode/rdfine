import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface IntransitiveActivity<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

declare global {
  interface AsVocabulary {
    IntransitiveActivity: Factory<As.IntransitiveActivity>;
  }
}

export function IntransitiveActivityMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<IntransitiveActivity & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class IntransitiveActivityClass extends ActivityMixin(Resource) {
  }
  return IntransitiveActivityClass as any
}
IntransitiveActivityMixin.appliesTo = as.IntransitiveActivity
IntransitiveActivityMixin.createFactory = (env: RdfineEnvironment) => createFactory<IntransitiveActivity>([ActivityMixin, IntransitiveActivityMixin], { types: [as.IntransitiveActivity] }, env)
