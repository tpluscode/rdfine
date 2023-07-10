import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Reject<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function RejectMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Reject & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class RejectClass extends ActivityMixin(Resource) {
  }
  return RejectClass as any
}

class RejectImpl extends RejectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Reject>) {
    super(arg, init)
    this.types.add(as.Reject)
  }

  static readonly __mixins: Mixin[] = [RejectMixin, ActivityMixin];
}
RejectMixin.appliesTo = as.Reject
RejectMixin.Class = RejectImpl

export const fromPointer = createFactory<Reject>([ActivityMixin, RejectMixin], { types: [as.Reject] });
