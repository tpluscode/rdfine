import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PriceSpecificationMixin } from './PriceSpecification';

export interface PaymentChargeSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PriceSpecification<D>, RdfResource<D> {
  appliesToDeliveryMethod: Schema.DeliveryMethod | undefined;
  appliesToPaymentMethod: Schema.PaymentMethod | undefined;
}

export function PaymentChargeSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PaymentChargeSpecificationClass extends PriceSpecificationMixin(Resource) implements PaymentChargeSpecification {
    @property()
    appliesToDeliveryMethod: Schema.DeliveryMethod | undefined;
    @property()
    appliesToPaymentMethod: Schema.PaymentMethod | undefined;
  }
  return PaymentChargeSpecificationClass
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
