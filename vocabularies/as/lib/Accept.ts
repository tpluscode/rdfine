import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Accept<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function AcceptMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Accept> & RdfResourceCore> & Base {
  @namespace(as)
  class AcceptClass extends ActivityMixin(Resource) implements Partial<Accept> {
  }
  return AcceptClass
}

class AcceptImpl extends AcceptMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Accept>) {
    super(arg, init)
    this.types.add(as.Accept)
  }

  static readonly __mixins: Mixin[] = [AcceptMixin, ActivityMixin];
}
AcceptMixin.appliesTo = as.Accept
AcceptMixin.Class = AcceptImpl

export const fromPointer = createFactory<Accept>([ActivityMixin, AcceptMixin], { types: [as.Accept] });
