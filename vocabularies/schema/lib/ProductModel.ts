import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ProductMixin } from './Product.js';

export interface ProductModel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Product<D>, rdfine.RdfResource<D> {
  isVariantOf: Schema.ProductGroup<D> | Schema.ProductModel<D> | undefined;
  predecessorOf: Schema.ProductModel<D> | undefined;
  successorOf: Schema.ProductModel<D> | undefined;
}

export function ProductModelMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ProductModel> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ProductModelClass extends ProductMixin(Resource) implements Partial<ProductModel> {
    @rdfine.property.resource()
    isVariantOf: Schema.ProductGroup | Schema.ProductModel | undefined;
    @rdfine.property.resource()
    predecessorOf: Schema.ProductModel | undefined;
    @rdfine.property.resource()
    successorOf: Schema.ProductModel | undefined;
  }
  return ProductModelClass
}

class ProductModelImpl extends ProductModelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ProductModel>) {
    super(arg, init)
    this.types.add(schema.ProductModel)
  }

  static readonly __mixins: Mixin[] = [ProductModelMixin, ProductMixin];
}
ProductModelMixin.appliesTo = schema.ProductModel
ProductModelMixin.Class = ProductModelImpl

export const fromPointer = createFactory<ProductModel>([ProductMixin, ProductModelMixin], { types: [schema.ProductModel] });
