import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { AcceptMixin } from './Accept.js';

export interface TentativeAccept<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Accept<D>, rdfine.RdfResource<D> {
}

export function TentativeAcceptMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TentativeAccept> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class TentativeAcceptClass extends AcceptMixin(Resource) implements Partial<TentativeAccept> {
  }
  return TentativeAcceptClass
}

class TentativeAcceptImpl extends TentativeAcceptMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TentativeAccept>) {
    super(arg, init)
    this.types.add(as.TentativeAccept)
  }

  static readonly __mixins: Mixin[] = [TentativeAcceptMixin, AcceptMixin];
}
TentativeAcceptMixin.appliesTo = as.TentativeAccept
TentativeAcceptMixin.Class = TentativeAcceptImpl

export const fromPointer = createFactory<TentativeAccept>([AcceptMixin, TentativeAcceptMixin], { types: [as.TentativeAccept] });
