import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ProductMixin from './Product';

export interface ProductModel extends Schema.Product, RdfResource {
  isVariantOf: Schema.ProductModel;
  predecessorOf: Schema.ProductModel;
  successorOf: Schema.ProductModel;
}

export default function ProductModelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProductModelClass extends ProductMixin(Resource) implements ProductModel {
    @property.resource()
    isVariantOf!: Schema.ProductModel;
    @property.resource()
    predecessorOf!: Schema.ProductModel;
    @property.resource()
    successorOf!: Schema.ProductModel;
  }
  return ProductModelClass
}

class ProductModelImpl extends ProductModelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ProductModel>) {
    super(arg, init)
    this.types.add(schema.ProductModel)
  }
}
ProductModelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ProductModel)
ProductModelMixin.Class = ProductModelImpl
