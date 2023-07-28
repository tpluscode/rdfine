import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PriceSpecificationMixin } from './PriceSpecification.js';

export interface PaymentChargeSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PriceSpecification<D>, rdfine.RdfResource<D> {
  appliesToDeliveryMethod: Schema.DeliveryMethod | undefined;
  appliesToPaymentMethod: Schema.PaymentMethod | undefined;
}

export function PaymentChargeSpecificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PaymentChargeSpecification & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PaymentChargeSpecificationClass extends PriceSpecificationMixin(Resource) {
    @rdfine.property()
    appliesToDeliveryMethod: Schema.DeliveryMethod | undefined;
    @rdfine.property()
    appliesToPaymentMethod: Schema.PaymentMethod | undefined;
  }
  return PaymentChargeSpecificationClass as any
}

class PaymentChargeSpecificationImpl extends PaymentChargeSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PaymentChargeSpecification>) {
    super(arg, init)
    this.types.add(schema.PaymentChargeSpecification)
  }

  static readonly __mixins: Mixin[] = [PaymentChargeSpecificationMixin, PriceSpecificationMixin];
}
PaymentChargeSpecificationMixin.appliesTo = schema.PaymentChargeSpecification
PaymentChargeSpecificationMixin.Class = PaymentChargeSpecificationImpl

export const fromPointer = createFactory<PaymentChargeSpecification>([PriceSpecificationMixin, PaymentChargeSpecificationMixin], { types: [schema.PaymentChargeSpecification] });
