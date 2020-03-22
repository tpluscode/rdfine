import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ThingMixin from './Thing';

export interface Person extends Schema.Thing, RdfResource {
  additionalName: string;
  address: Schema.PostalAddress;
  addressLiteral: string;
  affiliation: Schema.Organization;
  alumniOf: Schema.EducationalOrganization | Schema.Organization;
  award: string;
  awards: string;
  birthDate: Date;
  birthPlace: Schema.Place;
  brand: Schema.Brand | Schema.Organization;
  children: Person;
  colleague: Person;
  colleagueLiteral: string;
  colleagues: Person;
  contactPoint: Schema.ContactPoint;
  contactPoints: Schema.ContactPoint;
  deathDate: Date;
  deathPlace: Schema.Place;
  duns: string;
  email: string;
  familyName: string;
  faxNumber: string;
  follows: Person;
  funder: Schema.Organization | Person;
  givenName: string;
  globalLocationNumber: string;
  hasOccupation: Schema.Occupation;
  hasOfferCatalog: Schema.OfferCatalog;
  hasPOS: Schema.Place;
  height: Schema.Distance | Schema.QuantitativeValue;
  homeLocation: Schema.ContactPoint | Schema.Place;
  honorificPrefix: string;
  honorificSuffix: string;
  interactionStatistic: Schema.InteractionCounter;
  isicV4: string;
  knows: Person;
  makesOffer: Schema.Offer;
  memberOf: Schema.Organization | Schema.ProgramMembership;
  naics: string;
  nationality: Schema.Country;
  netWorth: Schema.MonetaryAmount | Schema.PriceSpecification;
  owns: Schema.OwnershipInfo | Schema.Product;
  parent: Person;
  parents: Person;
  performerIn: Schema.Event;
  publishingPrinciples: Schema.CreativeWork;
  publishingPrinciplesLiteral: string;
  relatedTo: Person;
  seeks: Schema.Demand;
  sibling: Person;
  siblings: Person;
  sponsor: Schema.Organization | Person;
  spouse: Person;
  taxID: string;
  telephone: string;
  vatID: string;
  weight: Schema.QuantitativeValue;
  workLocation: Schema.ContactPoint | Schema.Place;
  worksFor: Schema.Organization;
}

export default function PersonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PersonClass extends ThingMixin(Resource) implements Person {
    @property.literal()
    additionalName!: string;
    @property.resource()
    address!: Schema.PostalAddress;
    @property.literal({ path: schema.address })
    addressLiteral!: string;
    @property.resource()
    affiliation!: Schema.Organization;
    @property.resource()
    alumniOf!: Schema.EducationalOrganization | Schema.Organization;
    @property.literal()
    award!: string;
    @property.literal()
    awards!: string;
    @property.literal()
    birthDate!: Date;
    @property.resource()
    birthPlace!: Schema.Place;
    @property.resource()
    brand!: Schema.Brand | Schema.Organization;
    @property.resource()
    children!: Person;
    @property.resource()
    colleague!: Person;
    @property.literal({ path: schema.colleague })
    colleagueLiteral!: string;
    @property.resource()
    colleagues!: Person;
    @property.resource()
    contactPoint!: Schema.ContactPoint;
    @property.resource()
    contactPoints!: Schema.ContactPoint;
    @property.literal()
    deathDate!: Date;
    @property.resource()
    deathPlace!: Schema.Place;
    @property.literal()
    duns!: string;
    @property.literal()
    email!: string;
    @property.literal()
    familyName!: string;
    @property.literal()
    faxNumber!: string;
    @property.resource()
    follows!: Person;
    @property.resource()
    funder!: Schema.Organization | Person;
    @property.literal()
    givenName!: string;
    @property.literal()
    globalLocationNumber!: string;
    @property.resource()
    hasOccupation!: Schema.Occupation;
    @property.resource()
    hasOfferCatalog!: Schema.OfferCatalog;
    @property.resource()
    hasPOS!: Schema.Place;
    @property.resource()
    height!: Schema.Distance | Schema.QuantitativeValue;
    @property.resource()
    homeLocation!: Schema.ContactPoint | Schema.Place;
    @property.literal()
    honorificPrefix!: string;
    @property.literal()
    honorificSuffix!: string;
    @property.resource()
    interactionStatistic!: Schema.InteractionCounter;
    @property.literal()
    isicV4!: string;
    @property.resource()
    knows!: Person;
    @property.resource()
    makesOffer!: Schema.Offer;
    @property.resource()
    memberOf!: Schema.Organization | Schema.ProgramMembership;
    @property.literal()
    naics!: string;
    @property.resource()
    nationality!: Schema.Country;
    @property.resource()
    netWorth!: Schema.MonetaryAmount | Schema.PriceSpecification;
    @property.resource()
    owns!: Schema.OwnershipInfo | Schema.Product;
    @property.resource()
    parent!: Person;
    @property.resource()
    parents!: Person;
    @property.resource()
    performerIn!: Schema.Event;
    @property.resource()
    publishingPrinciples!: Schema.CreativeWork;
    @property.literal({ path: schema.publishingPrinciples })
    publishingPrinciplesLiteral!: string;
    @property.resource()
    relatedTo!: Person;
    @property.resource()
    seeks!: Schema.Demand;
    @property.resource()
    sibling!: Person;
    @property.resource()
    siblings!: Person;
    @property.resource()
    sponsor!: Schema.Organization | Person;
    @property.resource()
    spouse!: Person;
    @property.literal()
    taxID!: string;
    @property.literal()
    telephone!: string;
    @property.literal()
    vatID!: string;
    @property.resource()
    weight!: Schema.QuantitativeValue;
    @property.resource()
    workLocation!: Schema.ContactPoint | Schema.Place;
    @property.resource()
    worksFor!: Schema.Organization;
  }
  return PersonClass
}

class PersonImpl extends PersonMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Person)
  }
}
PersonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Person)
PersonMixin.Class = PersonImpl