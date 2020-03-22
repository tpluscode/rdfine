import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PriceSpecificationMixin from './PriceSpecification';

export interface UnitPriceSpecification extends Schema.PriceSpecification, RdfResource {
  billingIncrement: number;
  priceType: string;
  referenceQuantity: Schema.QuantitativeValue;
  unitCode: string | string;
  unitText: string;
}

export default function UnitPriceSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UnitPriceSpecificationClass extends PriceSpecificationMixin(Resource) implements UnitPriceSpecification {
    @property.literal({ type: Number })
    billingIncrement!: number;
    @property.literal()
    priceType!: string;
    @property.resource()
    referenceQuantity!: Schema.QuantitativeValue;
    @property.literal()
    unitCode!: string | string;
    @property.literal()
    unitText!: string;
  }
  return UnitPriceSpecificationClass
}

class UnitPriceSpecificationImpl extends UnitPriceSpecificationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.UnitPriceSpecification)
  }
}
UnitPriceSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UnitPriceSpecification)
UnitPriceSpecificationMixin.Class = UnitPriceSpecificationImpl
