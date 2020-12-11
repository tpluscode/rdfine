import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Order<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  acceptedOffer: Schema.Offer<D> | undefined;
  billingAddress: Schema.PostalAddress<D> | undefined;
  broker: Schema.Organization<D> | Schema.Person<D> | undefined;
  confirmationNumber: string | undefined;
  customer: Schema.Organization<D> | Schema.Person<D> | undefined;
  discount: number | string | undefined;
  discountCode: string | undefined;
  discountCurrency: string | undefined;
  isGift: boolean | undefined;
  merchant: Schema.Organization<D> | Schema.Person<D> | undefined;
  orderDate: Date | undefined;
  orderDelivery: Schema.ParcelDelivery<D> | undefined;
  orderedItem: Schema.OrderItem<D> | Schema.Product<D> | Schema.Service<D> | undefined;
  orderNumber: string | undefined;
  orderStatus: Schema.OrderStatus | undefined;
  partOfInvoice: Schema.Invoice<D> | undefined;
  paymentDue: Date | undefined;
  paymentDueDate: Date | undefined;
  paymentMethod: Schema.PaymentMethod | undefined;
  paymentMethodId: string | undefined;
  paymentUrl: RDF.NamedNode | undefined;
  seller: Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function OrderMixin<Base extends Constructor>(Resource: Base): Constructor<Order> & Base {
  @namespace(schema)
  class OrderClass extends IntangibleMixin(Resource) implements Partial<Order> {
    @property.resource()
    acceptedOffer: Schema.Offer | undefined;
    @property.resource()
    billingAddress: Schema.PostalAddress | undefined;
    @property.resource()
    broker: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    confirmationNumber: string | undefined;
    @property.resource()
    customer: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    discount: number | string | undefined;
    @property.literal()
    discountCode: string | undefined;
    @property.literal()
    discountCurrency: string | undefined;
    @property.literal({ type: Boolean })
    isGift: boolean | undefined;
    @property.resource()
    merchant: Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    orderDate: Date | undefined;
    @property.resource()
    orderDelivery: Schema.ParcelDelivery | undefined;
    @property.resource()
    orderedItem: Schema.OrderItem | Schema.Product | Schema.Service | undefined;
    @property.literal()
    orderNumber: string | undefined;
    @property()
    orderStatus: Schema.OrderStatus | undefined;
    @property.resource()
    partOfInvoice: Schema.Invoice | undefined;
    @property.literal({ type: Date })
    paymentDue: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    paymentDueDate: Date | undefined;
    @property()
    paymentMethod: Schema.PaymentMethod | undefined;
    @property.literal()
    paymentMethodId: string | undefined;
    @property()
    paymentUrl: RDF.NamedNode | undefined;
    @property.resource()
    seller: Schema.Organization | Schema.Person | undefined;
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
