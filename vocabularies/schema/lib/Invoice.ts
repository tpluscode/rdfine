import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Invoice<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  accountId: string | undefined;
  billingPeriod: Schema.Duration<D> | undefined;
  broker: Schema.Organization<D> | Schema.Person<D> | undefined;
  category: Schema.Thing<D> | undefined;
  categoryLiteral: string | undefined;
  confirmationNumber: string | undefined;
  customer: Schema.Organization<D> | Schema.Person<D> | undefined;
  minimumPaymentDue: Schema.MonetaryAmount<D> | Schema.PriceSpecification<D> | undefined;
  paymentDue: Date | undefined;
  paymentDueDate: Date | undefined;
  paymentMethod: Schema.PaymentMethod | undefined;
  paymentMethodId: string | undefined;
  paymentStatus: string | undefined;
  paymentStatusTerm: Schema.PaymentStatusType | undefined;
  provider: Schema.Organization<D> | Schema.Person<D> | undefined;
  referencesOrder: Schema.Order<D> | undefined;
  scheduledPaymentDate: Date | undefined;
  totalPaymentDue: Schema.MonetaryAmount<D> | Schema.PriceSpecification<D> | undefined;
}

export function InvoiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InvoiceClass extends IntangibleMixin(Resource) implements Invoice {
    @property.literal()
    accountId: string | undefined;
    @property.resource()
    billingPeriod: Schema.Duration | undefined;
    @property.resource()
    broker: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    category: Schema.Thing | undefined;
    @property.literal({ path: schema.category })
    categoryLiteral: string | undefined;
    @property.literal()
    confirmationNumber: string | undefined;
    @property.resource()
    customer: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    minimumPaymentDue: Schema.MonetaryAmount | Schema.PriceSpecification | undefined;
    @property.literal({ type: Date })
    paymentDue: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    paymentDueDate: Date | undefined;
    @property()
    paymentMethod: Schema.PaymentMethod | undefined;
    @property.literal()
    paymentMethodId: string | undefined;
    @property.literal()
    paymentStatus: string | undefined;
    @property({ path: schema.paymentStatus })
    paymentStatusTerm: Schema.PaymentStatusType | undefined;
    @property.resource()
    provider: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    referencesOrder: Schema.Order | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    scheduledPaymentDate: Date | undefined;
    @property.resource()
    totalPaymentDue: Schema.MonetaryAmount | Schema.PriceSpecification | undefined;
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
