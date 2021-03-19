import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { RejectMixin } from './Reject';

export interface TentativeReject<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Reject<D>, RdfResource<D> {
}

export function TentativeRejectMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TentativeReject> & RdfResourceCore> & Base {
  @namespace(as)
  class TentativeRejectClass extends RejectMixin(Resource) implements Partial<TentativeReject> {
  }
  return TentativeRejectClass
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
