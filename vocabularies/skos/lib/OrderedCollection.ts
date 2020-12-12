import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { skos } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Skos from '..';
import type * as Rdf from '@rdfine/rdf';
import { CollectionMixin } from './Collection';
import { ListMixin as RdfListMixin } from '@rdfine/rdf/lib/List';

export interface OrderedCollection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Skos.Collection<D>, RdfResource<D> {
  memberList: Rdf.List<D> | undefined;
}

export function OrderedCollectionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(skos)
  class OrderedCollectionClass extends CollectionMixin(Resource) implements Partial<OrderedCollection> {
    @property.resource({ as: [RdfListMixin] })
    memberList: Rdf.List | undefined;
  }
  return OrderedCollectionClass
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
