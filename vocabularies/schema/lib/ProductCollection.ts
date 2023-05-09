import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CollectionMixin } from './Collection.js';
import { ProductMixin } from './Product.js';

export interface ProductCollection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Collection<D>, Schema.Product<D>, rdfine.RdfResource<D> {
  includesObject: Schema.TypeAndQuantityNode<D> | undefined;
}

export function ProductCollectionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ProductCollection> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ProductCollectionClass extends ProductMixin(CollectionMixin(Resource)) implements Partial<ProductCollection> {
    @rdfine.property.resource()
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

export const fromPointer = createFactory<ProductCollection>([ProductMixin, CollectionMixin, ProductCollectionMixin], { types: [schema.ProductCollection] });
