import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ProductModel>) {
    super(arg)
    this.types.add(schema.ProductModel)
    initializeProperties<ProductModel>(this, init)
  }
}
ProductModelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ProductModel)
ProductModelMixin.Class = ProductModelImpl
