import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';

export interface OrderedItems<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function OrderedItemsMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OrderedItems & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class OrderedItemsClass extends Resource {
  }
  return OrderedItemsClass as any
}

class OrderedItemsImpl extends OrderedItemsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrderedItems>) {
    super(arg, init)
    this.types.add(as.OrderedItems)
  }

  static readonly __mixins: Mixin[] = [OrderedItemsMixin];
}
OrderedItemsMixin.appliesTo = as.OrderedItems
OrderedItemsMixin.Class = OrderedItemsImpl

export const fromPointer = createFactory<OrderedItems>([OrderedItemsMixin], { types: [as.OrderedItems] });
