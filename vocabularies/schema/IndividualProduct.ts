import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<IndividualProduct>) {
    super(arg, init)
    this.types.add(schema.IndividualProduct)
  }
}
IndividualProductMixin.shouldApply = (r: RdfResource) => r.types.has(schema.IndividualProduct)
IndividualProductMixin.Class = IndividualProductImpl
