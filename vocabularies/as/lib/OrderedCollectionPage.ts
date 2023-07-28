import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { CollectionPageMixin } from './CollectionPage.js';
import { OrderedCollectionMixin } from './OrderedCollection.js';

export interface OrderedCollectionPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.CollectionPage<D>, As.OrderedCollection<D>, rdfine.RdfResource<D> {
  startIndex: number | undefined;
}

export function OrderedCollectionPageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OrderedCollectionPage & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class OrderedCollectionPageClass extends OrderedCollectionMixin(CollectionPageMixin(Resource)) {
    @rdfine.property.literal({ type: Number })
    startIndex: number | undefined;
  }
  return OrderedCollectionPageClass as any
}

class OrderedCollectionPageImpl extends OrderedCollectionPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrderedCollectionPage>) {
    super(arg, init)
    this.types.add(as.OrderedCollectionPage)
  }

  static readonly __mixins: Mixin[] = [OrderedCollectionPageMixin, CollectionPageMixin, OrderedCollectionMixin];
}
OrderedCollectionPageMixin.appliesTo = as.OrderedCollectionPage
OrderedCollectionPageMixin.Class = OrderedCollectionPageImpl

export const fromPointer = createFactory<OrderedCollectionPage>([OrderedCollectionMixin, CollectionPageMixin, OrderedCollectionPageMixin], { types: [as.OrderedCollectionPage] });
