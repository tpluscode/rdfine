import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';

export interface OrderedCollection<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function OrderedCollectionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OrderedCollection & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class OrderedCollectionClass extends Resource {
  }
  return OrderedCollectionClass as any
}

class OrderedCollectionImpl extends OrderedCollectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrderedCollection>) {
    super(arg, init)
    this.types.add(as.OrderedCollection)
  }

  static readonly __mixins: Mixin[] = [OrderedCollectionMixin];
}
OrderedCollectionMixin.appliesTo = as.OrderedCollection
OrderedCollectionMixin.Class = OrderedCollectionImpl

export const fromPointer = createFactory<OrderedCollection>([OrderedCollectionMixin], { types: [as.OrderedCollection] });
