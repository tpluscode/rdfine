import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Accept<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, rdfine.RdfResource<D> {
}

export function AcceptMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Accept> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class AcceptClass extends ActivityMixin(Resource) implements Partial<Accept> {
  }
  return AcceptClass
}

class AcceptImpl extends AcceptMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Accept>) {
    super(arg, init)
    this.types.add(prov.Accept)
  }

  static readonly __mixins: Mixin[] = [AcceptMixin, ActivityMixin];
}
AcceptMixin.appliesTo = prov.Accept
AcceptMixin.Class = AcceptImpl

export const fromPointer = createFactory<Accept>([ActivityMixin, AcceptMixin], { types: [prov.Accept] });
