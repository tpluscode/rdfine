import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface Person<ID extends ResourceNode = ResourceNode> extends Schema.Thing<ID>, RdfResource<ID> {
  additionalName: string | undefined;
  address: Schema.PostalAddress<SiblingNode<ID>> | undefined;
  addressLiteral: string | undefined;
  affiliation: Schema.Organization<SiblingNode<ID>> | undefined;
  alumniOf: Schema.EducationalOrganization<SiblingNode<ID>> | Schema.Organization<SiblingNode<ID>> | undefined;
  award: string | undefined;
  awards: string | undefined;
  birthDate: Date | undefined;
  birthPlace: Schema.Place<SiblingNode<ID>> | undefined;
  brand: Schema.Brand<SiblingNode<ID>> | Schema.Organization<SiblingNode<ID>> | undefined;
  callSign: string | undefined;
  children: Schema.Person<SiblingNode<ID>> | undefined;
  colleague: Schema.Person<SiblingNode<ID>> | undefined;
  colleagues: Schema.Person<SiblingNode<ID>> | undefined;
  contactPoint: Schema.ContactPoint<SiblingNode<ID>> | undefined;
  contactPoints: Schema.ContactPoint<SiblingNode<ID>> | undefined;
  deathDate: Date | undefined;
  deathPlace: Schema.Place<SiblingNode<ID>> | undefined;
  duns: string | undefined;
  email: string | undefined;
  familyName: string | undefined;
  faxNumber: string | undefined;
  follows: Schema.Person<SiblingNode<ID>> | undefined;
  funder: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  gender: string | undefined;
  genderTerm: Schema.GenderType | undefined;
  givenName: string | undefined;
  globalLocationNumber: string | undefined;
  hasCredential: RDF.Term | undefined;
  hasOccupation: Schema.Occupation<SiblingNode<ID>> | undefined;
  hasOfferCatalog: Schema.OfferCatalog<SiblingNode<ID>> | undefined;
  hasPOS: Schema.Place<SiblingNode<ID>> | undefined;
  height: Schema.Distance<SiblingNode<ID>> | Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  homeLocation: Schema.ContactPoint<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  honorificPrefix: string | undefined;
  honorificSuffix: string | undefined;
  interactionStatistic: Schema.InteractionCounter<SiblingNode<ID>> | undefined;
  'isicV4': string | undefined;
  jobTitle: string | undefined;
  knows: Schema.Person<SiblingNode<ID>> | undefined;
  knowsAbout: Schema.Thing<SiblingNode<ID>> | undefined;
  knowsAboutLiteral: string | undefined;
  knowsLanguage: Schema.Language<SiblingNode<ID>> | undefined;
  knowsLanguageLiteral: string | undefined;
  makesOffer: Schema.Offer<SiblingNode<ID>> | undefined;
  memberOf: Schema.Organization<SiblingNode<ID>> | Schema.ProgramMembership<SiblingNode<ID>> | undefined;
  naics: string | undefined;
  nationality: Schema.Country<SiblingNode<ID>> | undefined;
  netWorth: Schema.MonetaryAmount<SiblingNode<ID>> | Schema.PriceSpecification<SiblingNode<ID>> | undefined;
  owns: Schema.OwnershipInfo<SiblingNode<ID>> | Schema.Product<SiblingNode<ID>> | undefined;
  parent: Schema.Person<SiblingNode<ID>> | undefined;
  parents: Schema.Person<SiblingNode<ID>> | undefined;
  performerIn: Schema.Event<SiblingNode<ID>> | undefined;
  publishingPrinciples: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  relatedTo: Schema.Person<SiblingNode<ID>> | undefined;
  seeks: Schema.Demand<SiblingNode<ID>> | undefined;
  sibling: Schema.Person<SiblingNode<ID>> | undefined;
  siblings: Schema.Person<SiblingNode<ID>> | undefined;
  sponsor: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  spouse: Schema.Person<SiblingNode<ID>> | undefined;
  taxID: string | undefined;
  telephone: string | undefined;
  vatID: string | undefined;
  weight: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  workLocation: Schema.ContactPoint<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  worksFor: Schema.Organization<SiblingNode<ID>> | undefined;
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
    @property.literal()
    callSign: string | undefined;
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
    gender: string | undefined;
    @property({ path: schema.gender })
    genderTerm: Schema.GenderType | undefined;
    @property.literal()
    givenName: string | undefined;
    @property.literal()
    globalLocationNumber: string | undefined;
    @property()
    hasCredential: RDF.Term | undefined;
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
    'isicV4': string | undefined;
    @property.literal()
    jobTitle: string | undefined;
    @property.resource()
    knows: Schema.Person | undefined;
    @property.resource()
    knowsAbout: Schema.Thing | undefined;
    @property.literal({ path: schema.knowsAbout })
    knowsAboutLiteral: string | undefined;
    @property.resource()
    knowsLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.knowsLanguage })
    knowsLanguageLiteral: string | undefined;
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
