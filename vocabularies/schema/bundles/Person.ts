import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../Thing';
import { PersonMixin } from '../Person';
import { PostalAddressMixin } from '../PostalAddress';
import { OrganizationMixin } from '../Organization';
import { EducationalOrganizationMixin } from '../EducationalOrganization';
import { PlaceMixin } from '../Place';
import { BrandMixin } from '../Brand';
import { ContactPointMixin } from '../ContactPoint';
import { OccupationMixin } from '../Occupation';
import { OfferCatalogMixin } from '../OfferCatalog';
import { DistanceMixin } from '../Distance';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { InteractionCounterMixin } from '../InteractionCounter';
import { LanguageMixin } from '../Language';
import { OfferMixin } from '../Offer';
import { ProgramMembershipMixin } from '../ProgramMembership';
import { CountryMixin } from '../Country';
import { MonetaryAmountMixin } from '../MonetaryAmount';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { OwnershipInfoMixin } from '../OwnershipInfo';
import { ProductMixin } from '../Product';
import { EventMixin } from '../Event';
import { CreativeWorkMixin } from '../CreativeWork';
import { DemandMixin } from '../Demand';

export const PersonBundle = [
  ThingMixin as Mixin,
  PersonMixin as Mixin,
  PostalAddressMixin as Mixin,
  OrganizationMixin as Mixin,
  EducationalOrganizationMixin as Mixin,
  PlaceMixin as Mixin,
  BrandMixin as Mixin,
  ContactPointMixin as Mixin,
  OccupationMixin as Mixin,
  OfferCatalogMixin as Mixin,
  DistanceMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  InteractionCounterMixin as Mixin,
  LanguageMixin as Mixin,
  OfferMixin as Mixin,
  ProgramMembershipMixin as Mixin,
  CountryMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  OwnershipInfoMixin as Mixin,
  ProductMixin as Mixin,
  EventMixin as Mixin,
  CreativeWorkMixin as Mixin,
  DemandMixin as Mixin];
