import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { skos } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Skos from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import { CollectionMixin } from './Collection.js';
import { ListMixin as RdfListMixin } from '@rdfine/rdf/lib/List';

export interface OrderedCollection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Skos.Collection<D>, rdfine.RdfResource<D> {
  memberList: Rdf.List<D> | undefined;
}

export function OrderedCollectionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OrderedCollection & RdfResourceCore> & Base {
  @rdfine.namespace(skos)
  class OrderedCollectionClass extends CollectionMixin(Resource) {
    @rdfine.property.resource({ as: [RdfListMixin] })
    memberList: Rdf.List | undefined;
  }
  return OrderedCollectionClass as any
}

class OrderedCollectionImpl extends OrderedCollectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrderedCollection>) {
    super(arg, init)
    this.types.add(skos.OrderedCollection)
  }

  static readonly __mixins: Mixin[] = [OrderedCollectionMixin, CollectionMixin];
}
OrderedCollectionMixin.appliesTo = skos.OrderedCollection
OrderedCollectionMixin.Class = OrderedCollectionImpl

export const fromPointer = createFactory<OrderedCollection>([CollectionMixin, OrderedCollectionMixin], { types: [skos.OrderedCollection] });
