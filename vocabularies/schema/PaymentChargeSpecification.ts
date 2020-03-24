import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PriceSpecificationMixin from './PriceSpecification';

export interface PaymentChargeSpecification extends Schema.PriceSpecification, RdfResource {
  appliesToDeliveryMethod: Schema.DeliveryMethod;
  appliesToPaymentMethod: Schema.PaymentMethod;
}

export default function PaymentChargeSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PaymentChargeSpecificationClass extends PriceSpecificationMixin(Resource) implements PaymentChargeSpecification {
    @property()
    appliesToDeliveryMethod!: Schema.DeliveryMethod;
    @property()
    appliesToPaymentMethod!: Schema.PaymentMethod;
  }
  return PaymentChargeSpecificationClass
}

class PaymentChargeSpecificationImpl extends PaymentChargeSpecificationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.PaymentChargeSpecification)
  }
}
PaymentChargeSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PaymentChargeSpecification)
PaymentChargeSpecificationMixin.Class = PaymentChargeSpecificationImpl
