import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ProductMixin from './Product';

export interface ProductModel extends Schema.Product, RdfResource {
  isVariantOf: ProductModel;
  predecessorOf: ProductModel;
  successorOf: ProductModel;
}

export default function ProductModelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProductModelClass extends ProductMixin(Resource) implements ProductModel {
    @property.resource()
    isVariantOf!: ProductModel;
    @property.resource()
    predecessorOf!: ProductModel;
    @property.resource()
    successorOf!: ProductModel;
  }
  return ProductModelClass
}

class ProductModelImpl extends ProductModelMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ProductModel)
  }
}
ProductModelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ProductModel)
ProductModelMixin.Class = ProductModelImpl
