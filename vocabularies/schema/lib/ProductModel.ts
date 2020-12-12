import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ProductMixin } from './Product';

export interface ProductModel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Product<D>, RdfResource<D> {
  isVariantOf: Schema.ProductGroup<D> | Schema.ProductModel<D> | undefined;
  predecessorOf: Schema.ProductModel<D> | undefined;
  successorOf: Schema.ProductModel<D> | undefined;
}

export function ProductModelMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ProductModel> & RdfResourceCore> & Base {
  @namespace(schema)
  class ProductModelClass extends ProductMixin(Resource) implements Partial<ProductModel> {
    @property.resource()
    isVariantOf: Schema.ProductGroup | Schema.ProductModel | undefined;
    @property.resource()
    predecessorOf: Schema.ProductModel | undefined;
    @property.resource()
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
