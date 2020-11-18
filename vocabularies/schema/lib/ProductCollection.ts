import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CollectionMixin } from './Collection';
import { ProductMixin } from './Product';

export interface ProductCollection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Collection<D>, Schema.Product<D>, RdfResource<D> {
  includesObject: Schema.TypeAndQuantityNode<D> | undefined;
}

export function ProductCollectionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProductCollectionClass extends ProductMixin(CollectionMixin(Resource)) implements ProductCollection {
    @property.resource()
    includesObject: Schema.TypeAndQuantityNode | undefined;
  }
  return ProductCollectionClass
}

class ProductCollectionImpl extends ProductCollectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ProductCollection>) {
    super(arg, init)
    this.types.add(schema.ProductCollection)
  }

  static readonly __mixins: Mixin[] = [ProductCollectionMixin, CollectionMixin, ProductMixin];
}
ProductCollectionMixin.appliesTo = schema.ProductCollection
ProductCollectionMixin.Class = ProductCollectionImpl
