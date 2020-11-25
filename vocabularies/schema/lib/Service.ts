import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Service<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  aggregateRating: Schema.AggregateRating<SiblingNode<ID>> | undefined;
  areaServed: Schema.AdministrativeArea<SiblingNode<ID>> | Schema.GeoShape<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  areaServedLiteral: string | undefined;
  audience: Schema.Audience<SiblingNode<ID>> | undefined;
  availableChannel: Schema.ServiceChannel<SiblingNode<ID>> | undefined;
  award: string | undefined;
  brand: Schema.Brand<SiblingNode<ID>> | Schema.Organization<SiblingNode<ID>> | undefined;
  broker: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  category: Schema.Thing<SiblingNode<ID>> | undefined;
  categoryLiteral: string | undefined;
  hasOfferCatalog: Schema.OfferCatalog<SiblingNode<ID>> | undefined;
  hoursAvailable: Schema.OpeningHoursSpecification<SiblingNode<ID>> | undefined;
  isRelatedTo: Schema.Product<SiblingNode<ID>> | Schema.Service<SiblingNode<ID>> | undefined;
  isSimilarTo: Schema.Product<SiblingNode<ID>> | Schema.Service<SiblingNode<ID>> | undefined;
  logo: Schema.ImageObject<SiblingNode<ID>> | undefined;
  offers: Schema.Demand<SiblingNode<ID>> | Schema.Offer<SiblingNode<ID>> | undefined;
  produces: Schema.Thing<SiblingNode<ID>> | undefined;
  provider: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  providerMobility: string | undefined;
  review: Schema.Review<SiblingNode<ID>> | undefined;
  serviceArea: Schema.AdministrativeArea<SiblingNode<ID>> | Schema.GeoShape<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  serviceAudience: Schema.Audience<SiblingNode<ID>> | undefined;
  serviceOutput: Schema.Thing<SiblingNode<ID>> | undefined;
  serviceType: string | undefined;
  serviceTypeTerm: Schema.GovernmentBenefitsType | undefined;
  slogan: string | undefined;
  termsOfService: string | undefined;
  termsOfServiceTerm: RDF.NamedNode | undefined;
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
