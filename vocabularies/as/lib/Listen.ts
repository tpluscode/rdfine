import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Listen<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function ListenMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Listen> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class ListenClass extends ActivityMixin(Resource) implements Partial<Listen> {
  }
  return ListenClass
}

class ListenImpl extends ListenMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Listen>) {
    super(arg, init)
    this.types.add(as.Listen)
  }

  static readonly __mixins: Mixin[] = [ListenMixin, ActivityMixin];
}
ListenMixin.appliesTo = as.Listen
ListenMixin.Class = ListenImpl

export const fromPointer = createFactory<Listen>([ActivityMixin, ListenMixin], { types: [as.Listen] });
