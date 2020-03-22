import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

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
  orderDate: Date | Date;
  orderDelivery: Schema.ParcelDelivery;
  orderedItem: Schema.OrderItem | Schema.Product | Schema.Service;
  orderNumber: string;
  orderStatus: Schema.OrderStatus;
  partOfInvoice: Schema.Invoice;
  paymentDue: Date;
  paymentDueDate: Date | Date;
  paymentMethod: Schema.PaymentMethod;
  paymentMethodId: string;
  paymentUrl: string;
  seller: Schema.Organization | Schema.Person;
}

export default function OrderMixin<Base extends Constructor>(Resource: Base) {
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
    orderDate!: Date | Date;
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
    paymentDueDate!: Date | Date;
    @property()
    paymentMethod!: Schema.PaymentMethod;
    @property.literal()
    paymentMethodId!: string;
    @property.literal()
    paymentUrl!: string;
    @property.resource()
    seller!: Schema.Organization | Schema.Person;
  }
  return OrderClass
}

class OrderImpl extends OrderMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Order)
  }
}
OrderMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Order)
OrderMixin.Class = OrderImpl
