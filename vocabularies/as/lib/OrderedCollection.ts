import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';

export interface OrderedCollection<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function OrderedCollectionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OrderedCollection> & RdfResourceCore> & Base {
  @namespace(as)
  class OrderedCollectionClass extends Resource implements Partial<OrderedCollection> {
  }
  return OrderedCollectionClass
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
