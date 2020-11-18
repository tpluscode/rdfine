import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { PersonMixin } from '../lib/Person';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { OrganizationMixin } from '../lib/Organization';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';
import { PlaceMixin } from '../lib/Place';
import { BrandMixin } from '../lib/Brand';
import { ContactPointMixin } from '../lib/ContactPoint';
import { OccupationMixin } from '../lib/Occupation';
import { OfferCatalogMixin } from '../lib/OfferCatalog';
import { DistanceMixin } from '../lib/Distance';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { InteractionCounterMixin } from '../lib/InteractionCounter';
import { LanguageMixin } from '../lib/Language';
import { OfferMixin } from '../lib/Offer';
import { ProgramMembershipMixin } from '../lib/ProgramMembership';
import { CountryMixin } from '../lib/Country';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { OwnershipInfoMixin } from '../lib/OwnershipInfo';
import { ProductMixin } from '../lib/Product';
import { EventMixin } from '../lib/Event';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DemandMixin } from '../lib/Demand';

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
