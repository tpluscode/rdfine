import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ProductMixin } from './Product.js';

export interface ProductGroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Product<D>, rdfine.RdfResource<D> {
  hasVariant: Schema.Product<D> | undefined;
  productGroupID: string | undefined;
  variesBy: string | undefined;
}

export function ProductGroupMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ProductGroup & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ProductGroupClass extends ProductMixin(Resource) {
    @rdfine.property.resource()
    hasVariant: Schema.Product | undefined;
    @rdfine.property.literal()
    productGroupID: string | undefined;
    @rdfine.property.literal()
    variesBy: string | undefined;
  }
  return ProductGroupClass as any
}

class ProductGroupImpl extends ProductGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ProductGroup>) {
    super(arg, init)
    this.types.add(schema.ProductGroup)
  }

  static readonly __mixins: Mixin[] = [ProductGroupMixin, ProductMixin];
}
ProductGroupMixin.appliesTo = schema.ProductGroup
ProductGroupMixin.Class = ProductGroupImpl

export const fromPointer = createFactory<ProductGroup>([ProductMixin, ProductGroupMixin], { types: [schema.ProductGroup] });
