import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ActivityMixin } from './Activity';

export interface Listen<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function ListenMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Listen> & RdfResourceCore> & Base {
  @namespace(as)
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
