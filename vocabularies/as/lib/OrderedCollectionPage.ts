import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { CollectionPageMixin } from './CollectionPage';
import { OrderedCollectionMixin } from './OrderedCollection';

export interface OrderedCollectionPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.CollectionPage<D>, As.OrderedCollection<D>, RdfResource<D> {
  startIndex: number | undefined;
}

export function OrderedCollectionPageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OrderedCollectionPage> & RdfResourceCore> & Base {
  @namespace(as)
  class OrderedCollectionPageClass extends OrderedCollectionMixin(CollectionPageMixin(Resource)) implements Partial<OrderedCollectionPage> {
    @property.literal({ type: Number })
    startIndex: number | undefined;
  }
  return OrderedCollectionPageClass
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
