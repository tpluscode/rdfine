import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface Organization<ID extends ResourceNode = ResourceNode> extends Schema.Thing<ID>, RdfResource<ID> {
  actionableFeedbackPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  address: Schema.PostalAddress<SiblingNode<ID>> | undefined;
  addressLiteral: string | undefined;
  aggregateRating: Schema.AggregateRating<SiblingNode<ID>> | undefined;
  alumni: Schema.Person<SiblingNode<ID>> | undefined;
  areaServed: Schema.AdministrativeArea<SiblingNode<ID>> | Schema.GeoShape<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  areaServedLiteral: string | undefined;
  award: string | undefined;
  awards: string | undefined;
  brand: Schema.Brand<SiblingNode<ID>> | Schema.Organization<SiblingNode<ID>> | undefined;
  contactPoint: Schema.ContactPoint<SiblingNode<ID>> | undefined;
  contactPoints: Schema.ContactPoint<SiblingNode<ID>> | undefined;
  correctionsPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  department: Schema.Organization<SiblingNode<ID>> | undefined;
  dissolutionDate: Date | undefined;
  diversityPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  diversityStaffingReport: Schema.Article<SiblingNode<ID>> | undefined;
  duns: string | undefined;
  email: string | undefined;
  employee: Schema.Person<SiblingNode<ID>> | undefined;
  employees: Schema.Person<SiblingNode<ID>> | undefined;
  ethicsPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  event: Schema.Event<SiblingNode<ID>> | undefined;
  events: Schema.Event<SiblingNode<ID>> | undefined;
  faxNumber: string | undefined;
  founder: Schema.Person<SiblingNode<ID>> | undefined;
  founders: Schema.Person<SiblingNode<ID>> | undefined;
  foundingDate: Date | undefined;
  foundingLocation: Schema.Place<SiblingNode<ID>> | undefined;
  funder: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  globalLocationNumber: string | undefined;
  hasCredential: RDF.Term | undefined;
  hasMerchantReturnPolicy: Schema.MerchantReturnPolicy<SiblingNode<ID>> | undefined;
  hasOfferCatalog: Schema.OfferCatalog<SiblingNode<ID>> | undefined;
  hasPOS: Schema.Place<SiblingNode<ID>> | undefined;
  interactionStatistic: Schema.InteractionCounter<SiblingNode<ID>> | undefined;
  'isicV4': string | undefined;
  knowsAbout: Schema.Thing<SiblingNode<ID>> | undefined;
  knowsAboutLiteral: string | undefined;
  knowsLanguage: Schema.Language<SiblingNode<ID>> | undefined;
  knowsLanguageLiteral: string | undefined;
  legalName: string | undefined;
  leiCode: string | undefined;
  location: Schema.Place<SiblingNode<ID>> | Schema.PostalAddress<SiblingNode<ID>> | undefined;
  locationLiteral: string | undefined;
  logo: Schema.ImageObject<SiblingNode<ID>> | undefined;
  makesOffer: Schema.Offer<SiblingNode<ID>> | undefined;
  member: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  memberOf: Schema.Organization<SiblingNode<ID>> | Schema.ProgramMembership<SiblingNode<ID>> | undefined;
  members: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  naics: string | undefined;
  nonprofitStatus: Schema.NonprofitType | undefined;
  numberOfEmployees: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  ownershipFundingInfo: Schema.AboutPage<SiblingNode<ID>> | Schema.CreativeWork<SiblingNode<ID>> | undefined;
  ownershipFundingInfoLiteral: string | undefined;
  owns: Schema.OwnershipInfo<SiblingNode<ID>> | Schema.Product<SiblingNode<ID>> | undefined;
  parentOrganization: Schema.Organization<SiblingNode<ID>> | undefined;
  publishingPrinciples: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  review: Schema.Review<SiblingNode<ID>> | undefined;
  reviews: Schema.Review<SiblingNode<ID>> | undefined;
  seeks: Schema.Demand<SiblingNode<ID>> | undefined;
  serviceArea: Schema.AdministrativeArea<SiblingNode<ID>> | Schema.GeoShape<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  slogan: string | undefined;
  sponsor: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  subOrganization: Schema.Organization<SiblingNode<ID>> | undefined;
  taxID: string | undefined;
  telephone: string | undefined;
  unnamedSourcesPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  vatID: string | undefined;
}

export function OrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrganizationClass extends ThingMixin(Resource) implements Organization {
    @property.resource()
    actionableFeedbackPolicy: Schema.CreativeWork | undefined;
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
    correctionsPolicy: Schema.CreativeWork | undefined;
    @property.resource()
    department: Schema.Organization | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dissolutionDate: Date | undefined;
    @property.resource()
    diversityPolicy: Schema.CreativeWork | undefined;
    @property.resource()
    diversityStaffingReport: Schema.Article | undefined;
    @property.literal()
    duns: string | undefined;
    @property.literal()
    email: string | undefined;
    @property.resource()
    employee: Schema.Person | undefined;
    @property.resource()
    employees: Schema.Person | undefined;
    @property.resource()
    ethicsPolicy: Schema.CreativeWork | undefined;
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
    @property()
    hasCredential: RDF.Term | undefined;
    @property.resource()
    hasMerchantReturnPolicy: Schema.MerchantReturnPolicy | undefined;
    @property.resource()
    hasOfferCatalog: Schema.OfferCatalog | undefined;
    @property.resource()
    hasPOS: Schema.Place | undefined;
    @property.resource()
    interactionStatistic: Schema.InteractionCounter | undefined;
    @property.literal()
    'isicV4': string | undefined;
    @property.resource()
    knowsAbout: Schema.Thing | undefined;
    @property.literal({ path: schema.knowsAbout })
    knowsAboutLiteral: string | undefined;
    @property.resource()
    knowsLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.knowsLanguage })
    knowsLanguageLiteral: string | undefined;
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
    @property()
    nonprofitStatus: Schema.NonprofitType | undefined;
    @property.resource()
    numberOfEmployees: Schema.QuantitativeValue | undefined;
    @property.resource()
    ownershipFundingInfo: Schema.AboutPage | Schema.CreativeWork | undefined;
    @property.literal({ path: schema.ownershipFundingInfo })
    ownershipFundingInfoLiteral: string | undefined;
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
    @property.resource()
    unnamedSourcesPolicy: Schema.CreativeWork | undefined;
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
