import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PriceSpecificationMixin from './PriceSpecification';

export interface CompoundPriceSpecification extends Schema.PriceSpecification, RdfResource {
  priceComponent: Schema.UnitPriceSpecification;
}

export default function CompoundPriceSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CompoundPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements CompoundPriceSpecification {
    @property.resource()
    priceComponent!: Schema.UnitPriceSpecification;
  }
  return CompoundPriceSpecificationClass
}

class CompoundPriceSpecificationImpl extends CompoundPriceSpecificationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CompoundPriceSpecification)
  }
}
CompoundPriceSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CompoundPriceSpecification)
CompoundPriceSpecificationMixin.Class = CompoundPriceSpecificationImpl
