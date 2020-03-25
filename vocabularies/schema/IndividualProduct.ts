import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ProductMixin from './Product';

export interface IndividualProduct extends Schema.Product, RdfResource {
  serialNumber: string;
}

export default function IndividualProductMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class IndividualProductClass extends ProductMixin(Resource) implements IndividualProduct {
    @property.literal()
    serialNumber!: string;
  }
  return IndividualProductClass
}

class IndividualProductImpl extends IndividualProductMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<IndividualProduct>) {
    super(arg)
    this.types.add(schema.IndividualProduct)
    initializeProperties<IndividualProduct>(this, init)
  }
}
IndividualProductMixin.shouldApply = (r: RdfResource) => r.types.has(schema.IndividualProduct)
IndividualProductMixin.Class = IndividualProductImpl
