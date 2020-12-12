import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface Organization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Thing<D>, RdfResource<D> {
  actionableFeedbackPolicy: Schema.CreativeWork<D> | undefined;
  address: Schema.PostalAddress<D> | undefined;
  addressLiteral: string | undefined;
  aggregateRating: Schema.AggregateRating<D> | undefined;
  alumni: Schema.Person<D> | undefined;
  areaServed: Schema.AdministrativeArea<D> | Schema.GeoShape<D> | Schema.Place<D> | undefined;
  areaServedLiteral: string | undefined;
  award: string | undefined;
  awards: string | undefined;
  brand: Schema.Brand<D> | Schema.Organization<D> | undefined;
  contactPoint: Schema.ContactPoint<D> | undefined;
  contactPoints: Schema.ContactPoint<D> | undefined;
  correctionsPolicy: Schema.CreativeWork<D> | undefined;
  department: Schema.Organization<D> | undefined;
  dissolutionDate: Date | undefined;
  diversityPolicy: Schema.CreativeWork<D> | undefined;
  diversityStaffingReport: Schema.Article<D> | undefined;
  duns: string | undefined;
  email: string | undefined;
  employee: Schema.Person<D> | undefined;
  employees: Schema.Person<D> | undefined;
  ethicsPolicy: Schema.CreativeWork<D> | undefined;
  event: Schema.Event<D> | undefined;
  events: Schema.Event<D> | undefined;
  faxNumber: string | undefined;
  founder: Schema.Person<D> | undefined;
  founders: Schema.Person<D> | undefined;
  foundingDate: Date | undefined;
  foundingLocation: Schema.Place<D> | undefined;
  funder: Schema.Organization<D> | Schema.Person<D> | undefined;
  globalLocationNumber: string | undefined;
  hasCredential: RDF.Term | undefined;
  hasMerchantReturnPolicy: Schema.MerchantReturnPolicy<D> | undefined;
  hasOfferCatalog: Schema.OfferCatalog<D> | undefined;
  hasPOS: Schema.Place<D> | undefined;
  interactionStatistic: Schema.InteractionCounter<D> | undefined;
  'isicV4': string | undefined;
  knowsAbout: Schema.Thing<D> | undefined;
  knowsAboutLiteral: string | undefined;
  knowsLanguage: Schema.Language<D> | undefined;
  knowsLanguageLiteral: string | undefined;
  legalName: string | undefined;
  leiCode: string | undefined;
  location: Schema.Place<D> | Schema.PostalAddress<D> | undefined;
  locationLiteral: string | undefined;
  logo: Schema.ImageObject<D> | undefined;
  makesOffer: Schema.Offer<D> | undefined;
  member: Schema.Organization<D> | Schema.Person<D> | undefined;
  memberOf: Schema.Organization<D> | Schema.ProgramMembership<D> | undefined;
  members: Schema.Organization<D> | Schema.Person<D> | undefined;
  naics: string | undefined;
  nonprofitStatus: Schema.NonprofitType | undefined;
  numberOfEmployees: Schema.QuantitativeValue<D> | undefined;
  ownershipFundingInfo: Schema.AboutPage<D> | Schema.CreativeWork<D> | undefined;
  ownershipFundingInfoLiteral: string | undefined;
  owns: Schema.OwnershipInfo<D> | Schema.Product<D> | undefined;
  parentOrganization: Schema.Organization<D> | undefined;
  publishingPrinciples: Schema.CreativeWork<D> | undefined;
  review: Schema.Review<D> | undefined;
  reviews: Schema.Review<D> | undefined;
  seeks: Schema.Demand<D> | undefined;
  serviceArea: Schema.AdministrativeArea<D> | Schema.GeoShape<D> | Schema.Place<D> | undefined;
  slogan: string | undefined;
  sponsor: Schema.Organization<D> | Schema.Person<D> | undefined;
  subOrganization: Schema.Organization<D> | undefined;
  taxID: string | undefined;
  telephone: string | undefined;
  unnamedSourcesPolicy: Schema.CreativeWork<D> | undefined;
  vatID: string | undefined;
}

export function OrganizationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Organization> & RdfResourceCore> & Base {
  @namespace(schema)
  class OrganizationClass extends ThingMixin(Resource) implements Partial<Organization> {
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

export const fromPointer = createFactory<Organization>([ThingMixin, OrganizationMixin], { types: [schema.Organization] });
