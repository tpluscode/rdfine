import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Service extends Schema.Intangible, RdfResource {
  aggregateRating: Schema.AggregateRating;
  areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
  areaServedLiteral: string;
  audience: Schema.Audience;
  availableChannel: Schema.ServiceChannel;
  award: string;
  brand: Schema.Brand | Schema.Organization;
  broker: Schema.Organization | Schema.Person;
  category: Schema.Thing;
  categoryLiteral: string;
  hasOfferCatalog: Schema.OfferCatalog;
  hoursAvailable: Schema.OpeningHoursSpecification;
  isRelatedTo: Schema.Product | Service;
  isSimilarTo: Schema.Product | Service;
  logo: Schema.ImageObject;
  logoLiteral: string;
  offers: Schema.Demand | Schema.Offer;
  produces: Schema.Thing;
  provider: Schema.Organization | Schema.Person;
  providerMobility: string;
  review: Schema.Review;
  serviceArea: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
  serviceAudience: Schema.Audience;
  serviceOutput: Schema.Thing;
  serviceType: string;
  slogan: string;
}

export default function ServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ServiceClass extends IntangibleMixin(Resource) implements Service {
    @property.resource()
    aggregateRating!: Schema.AggregateRating;
    @property.resource()
    areaServed!: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
    @property.literal({ path: schema.areaServed })
    areaServedLiteral!: string;
    @property.resource()
    audience!: Schema.Audience;
    @property.resource()
    availableChannel!: Schema.ServiceChannel;
    @property.literal()
    award!: string;
    @property.resource()
    brand!: Schema.Brand | Schema.Organization;
    @property.resource()
    broker!: Schema.Organization | Schema.Person;
    @property.resource()
    category!: Schema.Thing;
    @property.literal({ path: schema.category })
    categoryLiteral!: string;
    @property.resource()
    hasOfferCatalog!: Schema.OfferCatalog;
    @property.resource()
    hoursAvailable!: Schema.OpeningHoursSpecification;
    @property.resource()
    isRelatedTo!: Schema.Product | Service;
    @property.resource()
    isSimilarTo!: Schema.Product | Service;
    @property.resource()
    logo!: Schema.ImageObject;
    @property.literal({ path: schema.logo })
    logoLiteral!: string;
    @property.resource()
    offers!: Schema.Demand | Schema.Offer;
    @property.resource()
    produces!: Schema.Thing;
    @property.resource()
    provider!: Schema.Organization | Schema.Person;
    @property.literal()
    providerMobility!: string;
    @property.resource()
    review!: Schema.Review;
    @property.resource()
    serviceArea!: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
    @property.resource()
    serviceAudience!: Schema.Audience;
    @property.resource()
    serviceOutput!: Schema.Thing;
    @property.literal()
    serviceType!: string;
    @property.literal()
    slogan!: string;
  }
  return ServiceClass
}

class ServiceImpl extends ServiceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Service)
  }
}
ServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Service)
ServiceMixin.Class = ServiceImpl
