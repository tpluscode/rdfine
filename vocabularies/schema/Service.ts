import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Service extends Schema.Intangible, RdfResource {
  aggregateRating: Schema.AggregateRating | undefined;
  areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
  areaServedLiteral: string | undefined;
  audience: Schema.Audience | undefined;
  availableChannel: Schema.ServiceChannel | undefined;
  award: string | undefined;
  brand: Schema.Brand | Schema.Organization | undefined;
  broker: Schema.Organization | Schema.Person | undefined;
  category: Schema.Thing | undefined;
  categoryLiteral: string | undefined;
  hasOfferCatalog: Schema.OfferCatalog | undefined;
  hoursAvailable: Schema.OpeningHoursSpecification | undefined;
  isRelatedTo: Schema.Product | Schema.Service | undefined;
  isSimilarTo: Schema.Product | Schema.Service | undefined;
  logo: Schema.ImageObject | undefined;
  offers: Schema.Demand | Schema.Offer | undefined;
  produces: Schema.Thing | undefined;
  provider: Schema.Organization | Schema.Person | undefined;
  providerMobility: string | undefined;
  review: Schema.Review | undefined;
  serviceArea: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
  serviceAudience: Schema.Audience | undefined;
  serviceOutput: Schema.Thing | undefined;
  serviceType: string | undefined;
  serviceTypeTerm: RDF.Term | undefined;
  slogan: string | undefined;
}

export function ServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ServiceClass extends IntangibleMixin(Resource) implements Service {
    @property.resource()
    aggregateRating: Schema.AggregateRating | undefined;
    @property.resource()
    areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
    @property.literal({ path: schema.areaServed })
    areaServedLiteral: string | undefined;
    @property.resource()
    audience: Schema.Audience | undefined;
    @property.resource()
    availableChannel: Schema.ServiceChannel | undefined;
    @property.literal()
    award: string | undefined;
    @property.resource()
    brand: Schema.Brand | Schema.Organization | undefined;
    @property.resource()
    broker: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    category: Schema.Thing | undefined;
    @property.literal({ path: schema.category })
    categoryLiteral: string | undefined;
    @property.resource()
    hasOfferCatalog: Schema.OfferCatalog | undefined;
    @property.resource()
    hoursAvailable: Schema.OpeningHoursSpecification | undefined;
    @property.resource()
    isRelatedTo: Schema.Product | Schema.Service | undefined;
    @property.resource()
    isSimilarTo: Schema.Product | Schema.Service | undefined;
    @property.resource()
    logo: Schema.ImageObject | undefined;
    @property.resource()
    offers: Schema.Demand | Schema.Offer | undefined;
    @property.resource()
    produces: Schema.Thing | undefined;
    @property.resource()
    provider: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    providerMobility: string | undefined;
    @property.resource()
    review: Schema.Review | undefined;
    @property.resource()
    serviceArea: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
    @property.resource()
    serviceAudience: Schema.Audience | undefined;
    @property.resource()
    serviceOutput: Schema.Thing | undefined;
    @property.literal()
    serviceType: string | undefined;
    @property({ path: schema.serviceType })
    serviceTypeTerm: RDF.Term | undefined;
    @property.literal()
    slogan: string | undefined;
  }
  return ServiceClass
}

class ServiceImpl extends ServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Service>) {
    super(arg, init)
    this.types.add(schema.Service)
  }

  static readonly __mixins: Mixin[] = [ServiceMixin, IntangibleMixin];
}
ServiceMixin.appliesTo = schema.Service
ServiceMixin.Class = ServiceImpl
