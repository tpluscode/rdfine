import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Leave<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function LeaveMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Leave> & RdfResourceCore> & Base {
  @namespace(as)
  class LeaveClass extends ActivityMixin(Resource) implements Partial<Leave> {
  }
  return LeaveClass
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
