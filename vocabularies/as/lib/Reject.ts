import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Reject<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function RejectMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Reject> & RdfResourceCore> & Base {
  @namespace(as)
  class RejectClass extends ActivityMixin(Resource) implements Partial<Reject> {
  }
  return RejectClass
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
