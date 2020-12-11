import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ProductMixin } from './Product';

export interface SomeProducts<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Product<D>, RdfResource<D> {
  inventoryLevel: Schema.QuantitativeValue<D> | undefined;
}

export function SomeProductsMixin<Base extends Constructor>(Resource: Base): Constructor<SomeProducts> & Base {
  @namespace(schema)
  class SomeProductsClass extends ProductMixin(Resource) implements Partial<SomeProducts> {
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
