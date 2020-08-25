import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Invoice extends Schema.Intangible, RdfResource {
  accountId: string;
  billingPeriod: Schema.Duration;
  broker: Schema.Organization | Schema.Person;
  category: Schema.Thing;
  categoryLiteral: string;
  confirmationNumber: string;
  customer: Schema.Organization | Schema.Person;
  minimumPaymentDue: Schema.MonetaryAmount | Schema.PriceSpecification;
  paymentDue: Date;
  paymentDueDate: Date;
  paymentMethod: Schema.PaymentMethod;
  paymentMethodId: string;
  paymentStatus: string;
  paymentStatusTerm: Schema.PaymentStatusType;
  provider: Schema.Organization | Schema.Person;
  referencesOrder: Schema.Order;
  scheduledPaymentDate: Date;
  totalPaymentDue: Schema.MonetaryAmount | Schema.PriceSpecification;
}

export function InvoiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InvoiceClass extends IntangibleMixin(Resource) implements Invoice {
    @property.literal()
    accountId!: string;
    @property.resource()
    billingPeriod!: Schema.Duration;
    @property.resource()
    broker!: Schema.Organization | Schema.Person;
    @property.resource()
    category!: Schema.Thing;
    @property.literal({ path: schema.category })
    categoryLiteral!: string;
    @property.literal()
    confirmationNumber!: string;
    @property.resource()
    customer!: Schema.Organization | Schema.Person;
    @property.resource()
    minimumPaymentDue!: Schema.MonetaryAmount | Schema.PriceSpecification;
    @property.literal()
    paymentDue!: Date;
    @property.literal()
    paymentDueDate!: Date;
    @property()
    paymentMethod!: Schema.PaymentMethod;
    @property.literal()
    paymentMethodId!: string;
    @property.literal()
    paymentStatus!: string;
    @property({ path: schema.paymentStatus })
    paymentStatusTerm!: Schema.PaymentStatusType;
    @property.resource()
    provider!: Schema.Organization | Schema.Person;
    @property.resource()
    referencesOrder!: Schema.Order;
    @property.literal()
    scheduledPaymentDate!: Date;
    @property.resource()
    totalPaymentDue!: Schema.MonetaryAmount | Schema.PriceSpecification;
  }
  return InvoiceClass
}

class InvoiceImpl extends InvoiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Invoice>) {
    super(arg, init)
    this.types.add(schema.Invoice)
  }

  static readonly __mixins: Mixin[] = [InvoiceMixin, IntangibleMixin];
}
InvoiceMixin.appliesTo = schema.Invoice
InvoiceMixin.Class = InvoiceImpl
