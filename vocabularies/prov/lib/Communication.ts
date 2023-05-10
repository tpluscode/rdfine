import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { ActivityInfluenceMixin } from './ActivityInfluence.js';

export interface Communication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.ActivityInfluence<D>, rdfine.RdfResource<D> {
}

export function CommunicationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Communication> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class CommunicationClass extends ActivityInfluenceMixin(Resource) implements Partial<Communication> {
  }
  return CommunicationClass
}

class CommunicationImpl extends CommunicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Communication>) {
    super(arg, init)
    this.types.add(prov.Communication)
  }

  static readonly __mixins: Mixin[] = [CommunicationMixin, ActivityInfluenceMixin];
}
CommunicationMixin.appliesTo = prov.Communication
CommunicationMixin.Class = CommunicationImpl

export const fromPointer = createFactory<Communication>([ActivityInfluenceMixin, CommunicationMixin], { types: [prov.Communication] });
