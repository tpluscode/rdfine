import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Leave<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function LeaveMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Leave & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class LeaveClass extends ActivityMixin(Resource) {
  }
  return LeaveClass as any
}

class LeaveImpl extends LeaveMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Leave>) {
    super(arg, init)
    this.types.add(as.Leave)
  }

  static readonly __mixins: Mixin[] = [LeaveMixin, ActivityMixin];
}
LeaveMixin.appliesTo = as.Leave
LeaveMixin.Class = LeaveImpl

export const fromPointer = createFactory<Leave>([ActivityMixin, LeaveMixin], { types: [as.Leave] });
