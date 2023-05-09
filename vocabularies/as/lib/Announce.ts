import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Announce<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function AnnounceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Announce> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class AnnounceClass extends ActivityMixin(Resource) implements Partial<Announce> {
  }
  return AnnounceClass
}

class AnnounceImpl extends AnnounceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Announce>) {
    super(arg, init)
    this.types.add(as.Announce)
  }

  static readonly __mixins: Mixin[] = [AnnounceMixin, ActivityMixin];
}
AnnounceMixin.appliesTo = as.Announce
AnnounceMixin.Class = AnnounceImpl

export const fromPointer = createFactory<Announce>([ActivityMixin, AnnounceMixin], { types: [as.Announce] });
