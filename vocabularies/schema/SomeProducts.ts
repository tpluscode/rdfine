import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ProductMixin } from './Product';

export interface SomeProducts extends Schema.Product, RdfResource {
  inventoryLevel: Schema.QuantitativeValue | undefined;
}

export function SomeProductsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SomeProductsClass extends ProductMixin(Resource) implements SomeProducts {
    @property.resource()
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
