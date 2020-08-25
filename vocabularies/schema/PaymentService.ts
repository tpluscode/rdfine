import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { FinancialProductMixin } from './FinancialProduct';

export interface PaymentService extends Schema.FinancialProduct, RdfResource {
}

export function PaymentServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PaymentServiceClass extends FinancialProductMixin(Resource) implements PaymentService {
  }
  return PaymentServiceClass
}

class PaymentServiceImpl extends PaymentServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PaymentService>) {
    super(arg, init)
    this.types.add(schema.PaymentService)
  }

  static readonly __mixins: Mixin[] = [PaymentServiceMixin, FinancialProductMixin];
}
PaymentServiceMixin.appliesTo = schema.PaymentService
PaymentServiceMixin.Class = PaymentServiceImpl
