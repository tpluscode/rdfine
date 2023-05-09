import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ProductMixin } from './Product.js';

export interface SomeProducts<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Product<D>, rdfine.RdfResource<D> {
  inventoryLevel: Schema.QuantitativeValue<D> | undefined;
}

export function SomeProductsMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SomeProducts> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SomeProductsClass extends ProductMixin(Resource) implements Partial<SomeProducts> {
    @rdfine.property.resource()
    inventoryLevel: Schema.QuantitativeValue | undefined;
  }
  return SomeProductsClass
}

class SomeProductsImpl extends SomeProductsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SomeProducts>) {
    super(arg, init)
    this.types.add(schema.SomeProducts)
  }

  static readonly __mixins: Mixin[] = [SomeProductsMixin, ProductMixin];
}
SomeProductsMixin.appliesTo = schema.SomeProducts
SomeProductsMixin.Class = SomeProductsImpl

export const fromPointer = createFactory<SomeProducts>([ProductMixin, SomeProductsMixin], { types: [schema.SomeProducts] });
