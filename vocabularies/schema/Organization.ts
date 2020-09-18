import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ThingMixin } from './Thing';

export interface Organization extends Schema.Thing, RdfResource {
  address: Schema.PostalAddress | undefined;
  addressLiteral: string | undefined;
  aggregateRating: Schema.AggregateRating | undefined;
  alumni: Schema.Person | undefined;
  areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
  areaServedLiteral: string | undefined;
  award: string | undefined;
  awards: string | undefined;
  brand: Schema.Brand | Schema.Organization | undefined;
  contactPoint: Schema.ContactPoint | undefined;
  contactPoints: Schema.ContactPoint | undefined;
  department: Schema.Organization | undefined;
  dissolutionDate: Date | undefined;
  duns: string | undefined;
  email: string | undefined;
  employee: Schema.Person | undefined;
  employees: Schema.Person | undefined;
  event: Schema.Event | undefined;
  events: Schema.Event | undefined;
  faxNumber: string | undefined;
  founder: Schema.Person | undefined;
  founders: Schema.Person | undefined;
  foundingDate: Date | undefined;
  foundingLocation: Schema.Place | undefined;
  funder: Schema.Organization | Schema.Person | undefined;
  globalLocationNumber: string | undefined;
  hasOfferCatalog: Schema.OfferCatalog | undefined;
  hasPOS: Schema.Place | undefined;
  interactionStatistic: Schema.InteractionCounter | undefined;
  isicV4: string | undefined;
  legalName: string | undefined;
  leiCode: string | undefined;
  location: Schema.Place | Schema.PostalAddress | undefined;
  locationLiteral: string | undefined;
  logo: Schema.ImageObject | undefined;
  makesOffer: Schema.Offer | undefined;
  member: Schema.Organization | Schema.Person | undefined;
  memberOf: Schema.Organization | Schema.ProgramMembership | undefined;
  members: Schema.Organization | Schema.Person | undefined;
  naics: string | undefined;
  numberOfEmployees: Schema.QuantitativeValue | undefined;
  owns: Schema.OwnershipInfo | Schema.Product | undefined;
  parentOrganization: Schema.Organization | undefined;
  publishingPrinciples: Schema.CreativeWork | undefined;
  review: Schema.Review | undefined;
  reviews: Schema.Review | undefined;
  seeks: Schema.Demand | undefined;
  serviceArea: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
  slogan: string | undefined;
  sponsor: Schema.Organization | Schema.Person | undefined;
  subOrganization: Schema.Organization | undefined;
  taxID: string | undefined;
  telephone: string | undefined;
  vatID: string | undefined;
}

export function OrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrganizationClass extends ThingMixin(Resource) implements Organization {
    @property.resource()
    address: Schema.PostalAddress | undefined;
    @property.literal({ path: schema.address })
    addressLiteral: string | undefined;
    @property.resource()
    aggregateRating: Schema.AggregateRating | undefined;
    @property.resource()
    alumni: Schema.Person | undefined;
    @property.resource()
    areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
    @property.literal({ path: schema.areaServed })
    areaServedLiteral: string | undefined;
    @property.literal()
    award: string | undefined;
    @property.literal()
    awards: string | undefined;
    @property.resource()
    brand: Schema.Brand | Schema.Organization | undefined;
    @property.resource()
    contactPoint: Schema.ContactPoint | undefined;
    @property.resource()
    contactPoints: Schema.ContactPoint | undefined;
    @property.resource()
    department: Schema.Organization | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dissolutionDate: Date | undefined;
    @property.literal()
    duns: string | undefined;
    @property.literal()
    email: string | undefined;
    @property.resource()
    employee: Schema.Person | undefined;
    @property.resource()
    employees: Schema.Person | undefined;
    @property.resource()
    event: Schema.Event | undefined;
    @property.resource()
    events: Schema.Event | undefined;
    @property.literal()
    faxNumber: string | undefined;
    @property.resource()
    founder: Schema.Person | undefined;
    @property.resource()
    founders: Schema.Person | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    foundingDate: Date | undefined;
    @property.resource()
    foundingLocation: Schema.Place | undefined;
    @property.resource()
    funder: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    globalLocationNumber: string | undefined;
    @property.resource()
    hasOfferCatalog: Schema.OfferCatalog | undefined;
    @property.resource()
    hasPOS: Schema.Place | undefined;
    @property.resource()
    interactionStatistic: Schema.InteractionCounter | undefined;
    @property.literal()
    isicV4: string | undefined;
    @property.literal()
    legalName: string | undefined;
    @property.literal()
    leiCode: string | undefined;
    @property.resource()
    location: Schema.Place | Schema.PostalAddress | undefined;
    @property.literal({ path: schema.location })
    locationLiteral: string | undefined;
    @property.resource()
    logo: Schema.ImageObject | undefined;
    @property.resource()
    makesOffer: Schema.Offer | undefined;
    @property.resource()
    member: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    memberOf: Schema.Organization | Schema.ProgramMembership | undefined;
    @property.resource()
    members: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    naics: string | undefined;
    @property.resource()
    numberOfEmployees: Schema.QuantitativeValue | undefined;
    @property.resource()
    owns: Schema.OwnershipInfo | Schema.Product | undefined;
    @property.resource()
    parentOrganization: Schema.Organization | undefined;
    @property.resource()
    publishingPrinciples: Schema.CreativeWork | undefined;
    @property.resource()
    review: Schema.Review | undefined;
    @property.resource()
    reviews: Schema.Review | undefined;
    @property.resource()
    seeks: Schema.Demand | undefined;
    @property.resource()
    serviceArea: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place | undefined;
    @property.literal()
    slogan: string | undefined;
    @property.resource()
    sponsor: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    subOrganization: Schema.Organization | undefined;
    @property.literal()
    taxID: string | undefined;
    @property.literal()
    telephone: string | undefined;
    @property.literal()
    vatID: string | undefined;
  }
  return OrganizationClass
}

class OrganizationImpl extends OrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Organization>) {
    super(arg, init)
    this.types.add(schema.Organization)
  }

  static readonly __mixins: Mixin[] = [OrganizationMixin, ThingMixin];
}
OrganizationMixin.appliesTo = schema.Organization
OrganizationMixin.Class = OrganizationImpl
