import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Order extends Schema.Intangible, RdfResource {
  acceptedOffer: Schema.Offer;
  billingAddress: Schema.PostalAddress;
  broker: Schema.Organization | Schema.Person;
  confirmationNumber: string;
  customer: Schema.Organization | Schema.Person;
  discount: number | string;
  discountCode: string;
  discountCurrency: string;
  isGift: boolean;
  merchant: Schema.Organization | Schema.Person;
  orderDate: Date;
  orderDelivery: Schema.ParcelDelivery;
  orderedItem: Schema.OrderItem | Schema.Product | Schema.Service;
  orderNumber: string;
  orderStatus: Schema.OrderStatus;
  partOfInvoice: Schema.Invoice;
  paymentDue: Date;
  paymentDueDate: Date;
  paymentMethod: Schema.PaymentMethod;
  paymentMethodId: string;
  paymentUrl: RDF.NamedNode;
  seller: Schema.Organization | Schema.Person;
}

export function OrderMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrderClass extends IntangibleMixin(Resource) implements Order {
    @property.resource()
    acceptedOffer!: Schema.Offer;
    @property.resource()
    billingAddress!: Schema.PostalAddress;
    @property.resource()
    broker!: Schema.Organization | Schema.Person;
    @property.literal()
    confirmationNumber!: string;
    @property.resource()
    customer!: Schema.Organization | Schema.Person;
    @property.literal()
    discount!: number | string;
    @property.literal()
    discountCode!: string;
    @property.literal()
    discountCurrency!: string;
    @property.literal({ type: Boolean })
    isGift!: boolean;
    @property.resource()
    merchant!: Schema.Organization | Schema.Person;
    @property.literal()
    orderDate!: Date;
    @property.resource()
    orderDelivery!: Schema.ParcelDelivery;
    @property.resource()
    orderedItem!: Schema.OrderItem | Schema.Product | Schema.Service;
    @property.literal()
    orderNumber!: string;
    @property()
    orderStatus!: Schema.OrderStatus;
    @property.resource()
    partOfInvoice!: Schema.Invoice;
    @property.literal()
    paymentDue!: Date;
    @property.literal()
    paymentDueDate!: Date;
    @property()
    paymentMethod!: Schema.PaymentMethod;
    @property.literal()
    paymentMethodId!: string;
    @property()
    paymentUrl!: RDF.NamedNode;
    @property.resource()
    seller!: Schema.Organization | Schema.Person;
  }
  return OrderClass
}

class OrderImpl extends OrderMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Order>) {
    super(arg, init)
    this.types.add(schema.Order)
  }

  static readonly __mixins: Mixin[] = [OrderMixin, IntangibleMixin];
}
OrderMixin.appliesTo = schema.Order
OrderMixin.Class = OrderImpl
