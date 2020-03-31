import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ThingMixin from './Thing';

export interface Organization extends Schema.Thing, RdfResource {
  address: Schema.PostalAddress;
  addressLiteral: string;
  aggregateRating: Schema.AggregateRating;
  alumni: Schema.Person;
  areaServed: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
  areaServedLiteral: string;
  award: string;
  awards: string;
  brand: Schema.Brand | Schema.Organization;
  contactPoint: Schema.ContactPoint;
  contactPoints: Schema.ContactPoint;
  department: Schema.Organization;
  dissolutionDate: Date;
  duns: string;
  email: string;
  employee: Schema.Person;
  employees: Schema.Person;
  event: Schema.Event;
  events: Schema.Event;
  faxNumber: string;
  founder: Schema.Person;
  founders: Schema.Person;
  foundingDate: Date;
  foundingLocation: Schema.Place;
  funder: Schema.Organization | Schema.Person;
  globalLocationNumber: string;
  hasOfferCatalog: Schema.OfferCatalog;
  hasPOS: Schema.Place;
  interactionStatistic: Schema.InteractionCounter;
  isicV4: string;
  legalName: string;
  leiCode: string;
  location: Schema.Place | Schema.PostalAddress;
  locationLiteral: string;
  logo: Schema.ImageObject;
  makesOffer: Schema.Offer;
  member: Schema.Organization | Schema.Person;
  memberOf: Schema.Organization | Schema.ProgramMembership;
  members: Schema.Organization | Schema.Person;
  naics: string;
  numberOfEmployees: Schema.QuantitativeValue;
  owns: Schema.OwnershipInfo | Schema.Product;
  parentOrganization: Schema.Organization;
  publishingPrinciples: Schema.CreativeWork;
  review: Schema.Review;
  reviews: Schema.Review;
  seeks: Schema.Demand;
  serviceArea: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
  slogan: string;
  sponsor: Schema.Organization | Schema.Person;
  subOrganization: Schema.Organization;
  taxID: string;
  telephone: string;
  vatID: string;
}

export default function OrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrganizationClass extends ThingMixin(Resource) implements Organization {
    @property.resource()
    address!: Schema.PostalAddress;
    @property.literal({ path: schema.address })
    addressLiteral!: string;
    @property.resource()
    aggregateRating!: Schema.AggregateRating;
    @property.resource()
    alumni!: Schema.Person;
    @property.resource()
    areaServed!: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
    @property.literal({ path: schema.areaServed })
    areaServedLiteral!: string;
    @property.literal()
    award!: string;
    @property.literal()
    awards!: string;
    @property.resource()
    brand!: Schema.Brand | Schema.Organization;
    @property.resource()
    contactPoint!: Schema.ContactPoint;
    @property.resource()
    contactPoints!: Schema.ContactPoint;
    @property.resource()
    department!: Schema.Organization;
    @property.literal()
    dissolutionDate!: Date;
    @property.literal()
    duns!: string;
    @property.literal()
    email!: string;
    @property.resource()
    employee!: Schema.Person;
    @property.resource()
    employees!: Schema.Person;
    @property.resource()
    event!: Schema.Event;
    @property.resource()
    events!: Schema.Event;
    @property.literal()
    faxNumber!: string;
    @property.resource()
    founder!: Schema.Person;
    @property.resource()
    founders!: Schema.Person;
    @property.literal()
    foundingDate!: Date;
    @property.resource()
    foundingLocation!: Schema.Place;
    @property.resource()
    funder!: Schema.Organization | Schema.Person;
    @property.literal()
    globalLocationNumber!: string;
    @property.resource()
    hasOfferCatalog!: Schema.OfferCatalog;
    @property.resource()
    hasPOS!: Schema.Place;
    @property.resource()
    interactionStatistic!: Schema.InteractionCounter;
    @property.literal()
    isicV4!: string;
    @property.literal()
    legalName!: string;
    @property.literal()
    leiCode!: string;
    @property.resource()
    location!: Schema.Place | Schema.PostalAddress;
    @property.literal({ path: schema.location })
    locationLiteral!: string;
    @property.resource()
    logo!: Schema.ImageObject;
    @property.resource()
    makesOffer!: Schema.Offer;
    @property.resource()
    member!: Schema.Organization | Schema.Person;
    @property.resource()
    memberOf!: Schema.Organization | Schema.ProgramMembership;
    @property.resource()
    members!: Schema.Organization | Schema.Person;
    @property.literal()
    naics!: string;
    @property.resource()
    numberOfEmployees!: Schema.QuantitativeValue;
    @property.resource()
    owns!: Schema.OwnershipInfo | Schema.Product;
    @property.resource()
    parentOrganization!: Schema.Organization;
    @property.resource()
    publishingPrinciples!: Schema.CreativeWork;
    @property.resource()
    review!: Schema.Review;
    @property.resource()
    reviews!: Schema.Review;
    @property.resource()
    seeks!: Schema.Demand;
    @property.resource()
    serviceArea!: Schema.AdministrativeArea | Schema.GeoShape | Schema.Place;
    @property.literal()
    slogan!: string;
    @property.resource()
    sponsor!: Schema.Organization | Schema.Person;
    @property.resource()
    subOrganization!: Schema.Organization;
    @property.literal()
    taxID!: string;
    @property.literal()
    telephone!: string;
    @property.literal()
    vatID!: string;
  }
  return OrganizationClass
}

class OrganizationImpl extends OrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Organization>) {
    super(arg, init)
    this.types.add(schema.Organization)
  }
}
OrganizationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Organization)
OrganizationMixin.Class = OrganizationImpl
