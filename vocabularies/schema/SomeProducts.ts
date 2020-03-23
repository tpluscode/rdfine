import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ProductMixin from './Product';

export interface SomeProducts extends Schema.Product, RdfResource {
  inventoryLevel: Schema.QuantitativeValue;
}

export default function SomeProductsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SomeProductsClass extends ProductMixin(Resource) implements SomeProducts {
    @property.resource()
    inventoryLevel!: Schema.QuantitativeValue;
  }
  return SomeProductsClass
}

class SomeProductsImpl extends SomeProductsMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SomeProducts)
  }
}
SomeProductsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SomeProducts)
SomeProductsMixin.Class = SomeProductsImpl
