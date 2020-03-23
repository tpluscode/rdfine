import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.IndividualProduct)
  }
}
IndividualProductMixin.shouldApply = (r: RdfResource) => r.types.has(schema.IndividualProduct)
IndividualProductMixin.Class = IndividualProductImpl
