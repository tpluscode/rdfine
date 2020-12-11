import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ProductMixin } from './Product';

export interface ProductGroup<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Product<D>, RdfResource<D> {
  hasVariant: Schema.Product<D> | undefined;
  productGroupID: string | undefined;
  variesBy: string | undefined;
}

export function ProductGroupMixin<Base extends Constructor>(Resource: Base): Constructor<ProductGroup> & Base {
  @namespace(schema)
  class ProductGroupClass extends ProductMixin(Resource) implements Partial<ProductGroup> {
    @property.resource()
    hasVariant: Schema.Product | undefined;
    @property.literal()
    productGroupID: string | undefined;
    @property.literal()
    variesBy: string | undefined;
  }
  return ProductGroupClass
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
