import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FinancialProductMixin } from './FinancialProduct.js';

export interface PaymentService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialProduct<D>, RdfResource<D> {
}

export function PaymentServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PaymentService> & RdfResourceCore> & Base {
  @namespace(schema)
  class PaymentServiceClass extends FinancialProductMixin(Resource) implements Partial<PaymentService> {
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

export const fromPointer = createFactory<PaymentService>([FinancialProductMixin, PaymentServiceMixin], { types: [schema.PaymentService] });
