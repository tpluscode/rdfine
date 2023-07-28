import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { RejectMixin } from './Reject.js';

export interface TentativeReject<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Reject<D>, rdfine.RdfResource<D> {
}

export function TentativeRejectMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TentativeReject & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class TentativeRejectClass extends RejectMixin(Resource) {
  }
  return TentativeRejectClass as any
}

class TentativeRejectImpl extends TentativeRejectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TentativeReject>) {
    super(arg, init)
    this.types.add(as.TentativeReject)
  }

  static readonly __mixins: Mixin[] = [TentativeRejectMixin, RejectMixin];
}
TentativeRejectMixin.appliesTo = as.TentativeReject
TentativeRejectMixin.Class = TentativeRejectImpl

export const fromPointer = createFactory<TentativeReject>([RejectMixin, TentativeRejectMixin], { types: [as.TentativeReject] });
