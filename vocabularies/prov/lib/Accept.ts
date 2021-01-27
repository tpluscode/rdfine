import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { ActivityMixin } from './Activity';

export interface Accept<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, RdfResource<D> {
}

export function AcceptMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Accept> & RdfResourceCore> & Base {
  @namespace(prov)
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
