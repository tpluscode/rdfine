import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FinancialProductMixin from './FinancialProduct';

export interface PaymentService extends Schema.FinancialProduct, RdfResource {
}

export default function PaymentServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PaymentServiceClass extends FinancialProductMixin(Resource) implements PaymentService {
  }
  return PaymentServiceClass
}

class PaymentServiceImpl extends PaymentServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PaymentService>) {
    super(arg)
    this.types.add(schema.PaymentService)
    initializeProperties<PaymentService>(this, init)
  }
}
PaymentServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PaymentService)
PaymentServiceMixin.Class = PaymentServiceImpl
