import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface ParcelDelivery extends Schema.Intangible, RdfResource {
  carrier: Schema.Organization;
  deliveryAddress: Schema.PostalAddress;
  deliveryStatus: Schema.DeliveryEvent;
  expectedArrivalFrom: Date | Date;
  expectedArrivalUntil: Date | Date;
  hasDeliveryMethod: Schema.DeliveryMethod;
  itemShipped: Schema.Product;
  originAddress: Schema.PostalAddress;
  partOfOrder: Schema.Order;
  provider: Schema.Organization | Schema.Person;
  trackingNumber: string;
  trackingUrl: rdf.Term;
}

export default function ParcelDeliveryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ParcelDeliveryClass extends IntangibleMixin(Resource) implements ParcelDelivery {
    @property.resource()
    carrier!: Schema.Organization;
    @property.resource()
    deliveryAddress!: Schema.PostalAddress;
    @property.resource()
    deliveryStatus!: Schema.DeliveryEvent;
    @property.literal()
    expectedArrivalFrom!: Date | Date;
    @property.literal()
    expectedArrivalUntil!: Date | Date;
    @property()
    hasDeliveryMethod!: Schema.DeliveryMethod;
    @property.resource()
    itemShipped!: Schema.Product;
    @property.resource()
    originAddress!: Schema.PostalAddress;
    @property.resource()
    partOfOrder!: Schema.Order;
    @property.resource()
    provider!: Schema.Organization | Schema.Person;
    @property.literal()
    trackingNumber!: string;
    @property()
    trackingUrl!: rdf.Term;
  }
  return ParcelDeliveryClass
}

class ParcelDeliveryImpl extends ParcelDeliveryMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ParcelDelivery)
  }
}
ParcelDeliveryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ParcelDelivery)
ParcelDeliveryMixin.Class = ParcelDeliveryImpl
