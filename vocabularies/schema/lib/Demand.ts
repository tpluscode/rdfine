import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Demand<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  acceptedPaymentMethod: Schema.LoanOrCredit<D> | undefined;
  advanceBookingRequirement: Schema.QuantitativeValue<D> | undefined;
  areaServed: Schema.AdministrativeArea<D> | Schema.GeoShape<D> | Schema.Place<D> | undefined;
  areaServedLiteral: string | undefined;
  availability: Schema.ItemAvailability | undefined;
  availabilityEnds: Date | undefined;
  availabilityStarts: Date | undefined;
  availableAtOrFrom: Schema.Place<D> | undefined;
  availableDeliveryMethod: Schema.DeliveryMethod | undefined;
  businessFunction: Schema.BusinessFunction | undefined;
  deliveryLeadTime: Schema.QuantitativeValue<D> | undefined;
  eligibleCustomerType: Schema.BusinessEntityType | undefined;
  eligibleDuration: Schema.QuantitativeValue<D> | undefined;
  eligibleQuantity: Schema.QuantitativeValue<D> | undefined;
  eligibleRegion: Schema.GeoShape<D> | Schema.Place<D> | undefined;
  eligibleRegionLiteral: string | undefined;
  eligibleTransactionVolume: Schema.PriceSpecification<D> | undefined;
  gtin: string | undefined;
  'gtin12': string | undefined;
  'gtin13': string | undefined;
  'gtin14': string | undefined;
  'gtin8': string | undefined;
  includesObject: Schema.TypeAndQuantityNode<D> | undefined;
  ineligibleRegion: Schema.GeoShape<D> | Schema.Place<D> | undefined;
  ineligibleRegionLiteral: string | undefined;
  inventoryLevel: Schema.QuantitativeValue<D> | undefined;
  itemCondition: Schema.OfferItemCondition | undefined;
  itemOffered: Schema.AggregateOffer<D> | Schema.CreativeWork<D> | Schema.Event<D> | Schema.MenuItem<D> | Schema.Product<D> | Schema.Service<D> | Schema.Trip<D> | undefined;
  mpn: string | undefined;
  priceSpecification: Schema.PriceSpecification<D> | undefined;
  seller: Schema.Organization<D> | Schema.Person<D> | undefined;
  serialNumber: string | undefined;
  sku: string | undefined;
  validFrom: Date | undefined;
  validThrough: Date | undefined;
  warranty: Schema.WarrantyPromise<D> | undefined;
}

export function DemandMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Demand> & RdfResourceCore> & Base {
  @namespace(schema)
  class DemandClass extends IntangibleMixin(Resource) implements Partial<Demand> {
    @property.resource()
    acceptedPaymentMethod: Schema.LoanOrCredit | undefined;
    @property.resource()
    advanceBookingRequirement: Schema.QuantitativeValue | undefined;
    @property.resource()
    areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
    @property.literal({ path: schema.areaServed })
    areaServedLiteral: string | undefined;
    @property()
    availability: Schema.ItemAvailability | undefined;
    @property.literal({ type: Date })
    availabilityEnds: Date | undefined;
    @property.literal({ type: Date })
    availabilityStarts: Date | undefined;
    @property.resource()
    availableAtOrFrom: Schema.Place | undefined;
    @property()
    availableDeliveryMethod: Schema.DeliveryMethod | undefined;
    @property()
    businessFunction: Schema.BusinessFunction | undefined;
    @property.resource()
    deliveryLeadTime: Schema.QuantitativeValue | undefined;
    @property()
    eligibleCustomerType: Schema.BusinessEntityType | undefined;
    @property.resource()
    eligibleDuration: Schema.QuantitativeValue | undefined;
    @property.resource()
    eligibleQuantity: Schema.QuantitativeValue | undefined;
    @property.resource()
    eligibleRegion: Schema.GeoShape | Schema.Place | undefined;
    @property.literal({ path: schema.eligibleRegion })
    eligibleRegionLiteral: string | undefined;
    @property.resource()
    eligibleTransactionVolume: Schema.PriceSpecification | undefined;
    @property.literal()
    gtin: string | undefined;
    @property.literal()
    'gtin12': string | undefined;
    @property.literal()
    'gtin13': string | undefined;
    @property.literal()
    'gtin14': string | undefined;
    @property.literal()
    'gtin8': string | undefined;
    @property.resource()
    includesObject: Schema.TypeAndQuantityNode | undefined;
    @property.resource()
    ineligibleRegion: Schema.GeoShape | Schema.Place | undefined;
    @property.literal({ path: schema.ineligibleRegion })
    ineligibleRegionLiteral: string | undefined;
    @property.resource()
    inventoryLevel: Schema.QuantitativeValue | undefined;
    @property()
    itemCondition: Schema.OfferItemCondition | undefined;
    @property.resource()
    itemOffered: Schema.AggregateOffer | Schema.CreativeWork | Schema.Event | Schema.MenuItem | Schema.Product | Schema.Service | Schema.Trip | undefined;
    @property.literal()
    mpn: string | undefined;
    @property.resource()
    priceSpecification: Schema.PriceSpecification | undefined;
    @property.resource()
    seller: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    serialNumber: string | undefined;
    @property.literal()
    sku: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validFrom: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validThrough: Date | undefined;
    @property.resource()
    warranty: Schema.WarrantyPromise | undefined;
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

export const fromPointer = createFactory<Demand>([IntangibleMixin, DemandMixin], { types: [schema.Demand] });
