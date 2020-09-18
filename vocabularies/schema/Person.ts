import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ThingMixin } from './Thing';

export interface Person extends Schema.Thing, RdfResource {
  additionalName: string | undefined;
  address: Schema.PostalAddress | undefined;
  addressLiteral: string | undefined;
  affiliation: Schema.Organization | undefined;
  alumniOf: Schema.EducationalOrganization | Schema.Organization | undefined;
  award: string | undefined;
  awards: string | undefined;
  birthDate: Date | undefined;
  birthPlace: Schema.Place | undefined;
  brand: Schema.Brand | Schema.Organization | undefined;
  children: Schema.Person | undefined;
  colleague: Schema.Person | undefined;
  colleagues: Schema.Person | undefined;
  contactPoint: Schema.ContactPoint | undefined;
  contactPoints: Schema.ContactPoint | undefined;
  deathDate: Date | undefined;
  deathPlace: Schema.Place | undefined;
  duns: string | undefined;
  email: string | undefined;
  familyName: string | undefined;
  faxNumber: string | undefined;
  follows: Schema.Person | undefined;
  funder: Schema.Organization | Schema.Person | undefined;
  givenName: string | undefined;
  globalLocationNumber: string | undefined;
  hasOccupation: Schema.Occupation | undefined;
  hasOfferCatalog: Schema.OfferCatalog | undefined;
  hasPOS: Schema.Place | undefined;
  height: Schema.Distance | Schema.QuantitativeValue | undefined;
  homeLocation: Schema.ContactPoint | Schema.Place | undefined;
  honorificPrefix: string | undefined;
  honorificSuffix: string | undefined;
  interactionStatistic: Schema.InteractionCounter | undefined;
  isicV4: string | undefined;
  knows: Schema.Person | undefined;
  makesOffer: Schema.Offer | undefined;
  memberOf: Schema.Organization | Schema.ProgramMembership | undefined;
  naics: string | undefined;
  nationality: Schema.Country | undefined;
  netWorth: Schema.MonetaryAmount | Schema.PriceSpecification | undefined;
  owns: Schema.OwnershipInfo | Schema.Product | undefined;
  parent: Schema.Person | undefined;
  parents: Schema.Person | undefined;
  performerIn: Schema.Event | undefined;
  publishingPrinciples: Schema.CreativeWork | undefined;
  relatedTo: Schema.Person | undefined;
  seeks: Schema.Demand | undefined;
  sibling: Schema.Person | undefined;
  siblings: Schema.Person | undefined;
  sponsor: Schema.Organization | Schema.Person | undefined;
  spouse: Schema.Person | undefined;
  taxID: string | undefined;
  telephone: string | undefined;
  vatID: string | undefined;
  weight: Schema.QuantitativeValue | undefined;
  workLocation: Schema.ContactPoint | Schema.Place | undefined;
  worksFor: Schema.Organization | undefined;
}

export function PersonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PersonClass extends ThingMixin(Resource) implements Person {
    @property.literal()
    additionalName: string | undefined;
    @property.resource()
    address: Schema.PostalAddress | undefined;
    @property.literal({ path: schema.address })
    addressLiteral: string | undefined;
    @property.resource()
    affiliation: Schema.Organization | undefined;
    @property.resource()
    alumniOf: Schema.EducationalOrganization | Schema.Organization | undefined;
    @property.literal()
    award: string | undefined;
    @property.literal()
    awards: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    birthDate: Date | undefined;
    @property.resource()
    birthPlace: Schema.Place | undefined;
    @property.resource()
    brand: Schema.Brand | Schema.Organization | undefined;
    @property.resource()
    children: Schema.Person | undefined;
    @property.resource()
    colleague: Schema.Person | undefined;
    @property.resource()
    colleagues: Schema.Person | undefined;
    @property.resource()
    contactPoint: Schema.ContactPoint | undefined;
    @property.resource()
    contactPoints: Schema.ContactPoint | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    deathDate: Date | undefined;
    @property.resource()
    deathPlace: Schema.Place | undefined;
    @property.literal()
    duns: string | undefined;
    @property.literal()
    email: string | undefined;
    @property.literal()
    familyName: string | undefined;
    @property.literal()
    faxNumber: string | undefined;
    @property.resource()
    follows: Schema.Person | undefined;
    @property.resource()
    funder: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    givenName: string | undefined;
    @property.literal()
    globalLocationNumber: string | undefined;
    @property.resource()
    hasOccupation: Schema.Occupation | undefined;
    @property.resource()
    hasOfferCatalog: Schema.OfferCatalog | undefined;
    @property.resource()
    hasPOS: Schema.Place | undefined;
    @property.resource()
    height: Schema.Distance | Schema.QuantitativeValue | undefined;
    @property.resource()
    homeLocation: Schema.ContactPoint | Schema.Place | undefined;
    @property.literal()
    honorificPrefix: string | undefined;
    @property.literal()
    honorificSuffix: string | undefined;
    @property.resource()
    interactionStatistic: Schema.InteractionCounter | undefined;
    @property.literal()
    isicV4: string | undefined;
    @property.resource()
    knows: Schema.Person | undefined;
    @property.resource()
    makesOffer: Schema.Offer | undefined;
    @property.resource()
    memberOf: Schema.Organization | Schema.ProgramMembership | undefined;
    @property.literal()
    naics: string | undefined;
    @property.resource()
    nationality: Schema.Country | undefined;
    @property.resource()
    netWorth: Schema.MonetaryAmount | Schema.PriceSpecification | undefined;
    @property.resource()
    owns: Schema.OwnershipInfo | Schema.Product | undefined;
    @property.resource()
    parent: Schema.Person | undefined;
    @property.resource()
    parents: Schema.Person | undefined;
    @property.resource()
    performerIn: Schema.Event | undefined;
    @property.resource()
    publishingPrinciples: Schema.CreativeWork | undefined;
    @property.resource()
    relatedTo: Schema.Person | undefined;
    @property.resource()
    seeks: Schema.Demand | undefined;
    @property.resource()
    sibling: Schema.Person | undefined;
    @property.resource()
    siblings: Schema.Person | undefined;
    @property.resource()
    sponsor: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    spouse: Schema.Person | undefined;
    @property.literal()
    taxID: string | undefined;
    @property.literal()
    telephone: string | undefined;
    @property.literal()
    vatID: string | undefined;
    @property.resource()
    weight: Schema.QuantitativeValue | undefined;
    @property.resource()
    workLocation: Schema.ContactPoint | Schema.Place | undefined;
    @property.resource()
    worksFor: Schema.Organization | undefined;
  }
  return PersonClass
}

class PersonImpl extends PersonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Person>) {
    super(arg, init)
    this.types.add(schema.Person)
  }

  static readonly __mixins: Mixin[] = [PersonMixin, ThingMixin];
}
PersonMixin.appliesTo = schema.Person
PersonMixin.Class = PersonImpl
