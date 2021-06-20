import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Service<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  aggregateRating: Schema.AggregateRating<D> | undefined;
  areaServed: Schema.AdministrativeArea<D> | Schema.GeoShape<D> | Schema.Place<D> | undefined;
  areaServedLiteral: string | undefined;
  audience: Schema.Audience<D> | undefined;
  availableChannel: Schema.ServiceChannel<D> | undefined;
  award: string | undefined;
  brand: Schema.Brand<D> | Schema.Organization<D> | undefined;
  broker: Schema.Organization<D> | Schema.Person<D> | undefined;
  category: Schema.Thing<D> | undefined;
  categoryLiteral: string | undefined;
  hasOfferCatalog: Schema.OfferCatalog<D> | undefined;
  hoursAvailable: Schema.OpeningHoursSpecification<D> | undefined;
  isRelatedTo: Schema.Product<D> | Schema.Service<D> | undefined;
  isSimilarTo: Schema.Product<D> | Schema.Service<D> | undefined;
  logo: Schema.ImageObject<D> | undefined;
  offers: Schema.Demand<D> | Schema.Offer<D> | undefined;
  produces: Schema.Thing<D> | undefined;
  provider: Schema.Organization<D> | Schema.Person<D> | undefined;
  providerMobility: string | undefined;
  review: Schema.Review<D> | undefined;
  serviceArea: Schema.AdministrativeArea<D> | Schema.GeoShape<D> | Schema.Place<D> | undefined;
  serviceAudience: Schema.Audience<D> | undefined;
  serviceOutput: Schema.Thing<D> | undefined;
  serviceType: string | undefined;
  serviceTypeTerm: Schema.GovernmentBenefitsType | undefined;
  slogan: string | undefined;
  termsOfService: string | undefined;
  termsOfServiceTerm: RDF.NamedNode | undefined;
}

export function ServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Service> & RdfResourceCore> & Base {
  @namespace(schema)
  class ServiceClass extends IntangibleMixin(Resource) implements Partial<Service> {
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
    serviceTypeTerm: Schema.GovernmentBenefitsType | undefined;
    @property.literal()
    slogan: string | undefined;
    @property.literal()
    termsOfService: string | undefined;
    @property({ path: schema.termsOfService })
    termsOfServiceTerm: RDF.NamedNode | undefined;
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

export const fromPointer = createFactory<Service>([IntangibleMixin, ServiceMixin], { types: [schema.Service] });
