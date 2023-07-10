import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface IntransitiveActivity<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function IntransitiveActivityMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<IntransitiveActivity & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class IntransitiveActivityClass extends ActivityMixin(Resource) {
  }
  return IntransitiveActivityClass as any
}

class IntransitiveActivityImpl extends IntransitiveActivityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IntransitiveActivity>) {
    super(arg, init)
    this.types.add(as.IntransitiveActivity)
  }

  static readonly __mixins: Mixin[] = [IntransitiveActivityMixin, ActivityMixin];
}
IntransitiveActivityMixin.appliesTo = as.IntransitiveActivity
IntransitiveActivityMixin.Class = IntransitiveActivityImpl

export const fromPointer = createFactory<IntransitiveActivity>([ActivityMixin, IntransitiveActivityMixin], { types: [as.IntransitiveActivity] });
