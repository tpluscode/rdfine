import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';

export interface OrderedItems<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function OrderedItemsMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OrderedItems> & RdfResourceCore> & Base {
  @namespace(as)
  class OrderedItemsClass extends Resource implements Partial<OrderedItems> {
  }
  return OrderedItemsClass
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
