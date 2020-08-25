import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface ParcelDelivery extends Schema.Intangible, RdfResource {
  carrier: Schema.Organization;
  deliveryAddress: Schema.PostalAddress;
  deliveryStatus: Schema.DeliveryEvent;
  expectedArrivalFrom: Date;
  expectedArrivalUntil: Date;
  hasDeliveryMethod: Schema.DeliveryMethod;
  itemShipped: Schema.Product;
  originAddress: Schema.PostalAddress;
  partOfOrder: Schema.Order;
  provider: Schema.Organization | Schema.Person;
  trackingNumber: string;
  trackingUrl: RDF.NamedNode;
}

export function ParcelDeliveryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ParcelDeliveryClass extends IntangibleMixin(Resource) implements ParcelDelivery {
    @property.resource()
    carrier!: Schema.Organization;
    @property.resource()
    deliveryAddress!: Schema.PostalAddress;
    @property.resource()
    deliveryStatus!: Schema.DeliveryEvent;
    @property.literal()
    expectedArrivalFrom!: Date;
    @property.literal()
    expectedArrivalUntil!: Date;
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
    trackingUrl!: RDF.NamedNode;
  }
  return ParcelDeliveryClass
}

class ParcelDeliveryImpl extends ParcelDeliveryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ParcelDelivery>) {
    super(arg, init)
    this.types.add(schema.ParcelDelivery)
  }

  static readonly __mixins: Mixin[] = [ParcelDeliveryMixin, IntangibleMixin];
}
ParcelDeliveryMixin.appliesTo = schema.ParcelDelivery
ParcelDeliveryMixin.Class = ParcelDeliveryImpl
