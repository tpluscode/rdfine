import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Demand extends Schema.Intangible, RdfResource {
  acceptedPaymentMethod: Schema.LoanOrCredit;
  advanceBookingRequirement: Schema.QuantitativeValue;
  areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
  areaServedLiteral: string;
  availability: Schema.ItemAvailability;
  availabilityEnds: Date;
  availabilityStarts: Date;
  availableAtOrFrom: Schema.Place;
  availableDeliveryMethod: Schema.DeliveryMethod;
  businessFunction: Schema.BusinessFunction;
  deliveryLeadTime: Schema.QuantitativeValue;
  eligibleCustomerType: Schema.BusinessEntityType;
  eligibleDuration: Schema.QuantitativeValue;
  eligibleQuantity: Schema.QuantitativeValue;
  eligibleRegion: Schema.GeoShape | Schema.Place;
  eligibleRegionLiteral: string;
  eligibleTransactionVolume: Schema.PriceSpecification;
  gtin12: string;
  gtin13: string;
  gtin14: string;
  gtin8: string;
  includesObject: Schema.TypeAndQuantityNode;
  inventoryLevel: Schema.QuantitativeValue;
  itemCondition: Schema.OfferItemCondition;
  itemOffered: Schema.AggregateOffer | Schema.CreativeWork | Schema.Event | Schema.MenuItem | Schema.Product | Schema.Service | Schema.Trip;
  mpn: string;
  priceSpecification: Schema.PriceSpecification;
  seller: Schema.Organization | Schema.Person;
  serialNumber: string;
  sku: string;
  validFrom: Date;
  validThrough: Date;
  warranty: Schema.WarrantyPromise;
}

export function DemandMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DemandClass extends IntangibleMixin(Resource) implements Demand {
    @property.resource()
    acceptedPaymentMethod!: Schema.LoanOrCredit;
    @property.resource()
    advanceBookingRequirement!: Schema.QuantitativeValue;
    @property.resource()
    areaServed!: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
    @property.literal({ path: schema.areaServed })
    areaServedLiteral!: string;
    @property()
    availability!: Schema.ItemAvailability;
    @property.literal({ type: Date })
    availabilityEnds!: Date;
    @property.literal({ type: Date })
    availabilityStarts!: Date;
    @property.resource()
    availableAtOrFrom!: Schema.Place;
    @property()
    availableDeliveryMethod!: Schema.DeliveryMethod;
    @property()
    businessFunction!: Schema.BusinessFunction;
    @property.resource()
    deliveryLeadTime!: Schema.QuantitativeValue;
    @property()
    eligibleCustomerType!: Schema.BusinessEntityType;
    @property.resource()
    eligibleDuration!: Schema.QuantitativeValue;
    @property.resource()
    eligibleQuantity!: Schema.QuantitativeValue;
    @property.resource()
    eligibleRegion!: Schema.GeoShape | Schema.Place;
    @property.literal({ path: schema.eligibleRegion })
    eligibleRegionLiteral!: string;
    @property.resource()
    eligibleTransactionVolume!: Schema.PriceSpecification;
    @property.literal()
    gtin12!: string;
    @property.literal()
    gtin13!: string;
    @property.literal()
    gtin14!: string;
    @property.literal()
    gtin8!: string;
    @property.resource()
    includesObject!: Schema.TypeAndQuantityNode;
    @property.resource()
    inventoryLevel!: Schema.QuantitativeValue;
    @property()
    itemCondition!: Schema.OfferItemCondition;
    @property.resource()
    itemOffered!: Schema.AggregateOffer | Schema.CreativeWork | Schema.Event | Schema.MenuItem | Schema.Product | Schema.Service | Schema.Trip;
    @property.literal()
    mpn!: string;
    @property.resource()
    priceSpecification!: Schema.PriceSpecification;
    @property.resource()
    seller!: Schema.Organization | Schema.Person;
    @property.literal()
    serialNumber!: string;
    @property.literal()
    sku!: string;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validFrom!: Date;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validThrough!: Date;
    @property.resource()
    warranty!: Schema.WarrantyPromise;
  }
  return DemandClass
}

class DemandImpl extends DemandMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Demand>) {
    super(arg, init)
    this.types.add(schema.Demand)
  }

  static readonly __mixins: Mixin[] = [DemandMixin, IntangibleMixin];
}
DemandMixin.appliesTo = schema.Demand
DemandMixin.Class = DemandImpl
