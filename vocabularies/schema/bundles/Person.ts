import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BrandMixin } from '../lib/Brand';
import { ContactPointMixin } from '../lib/ContactPoint';
import { CountryMixin } from '../lib/Country';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DemandMixin } from '../lib/Demand';
import { DistanceMixin } from '../lib/Distance';
import { EducationalOrganizationMixin } from '../lib/EducationalOrganization';
import { EventMixin } from '../lib/Event';
import { InteractionCounterMixin } from '../lib/InteractionCounter';
import { LanguageMixin } from '../lib/Language';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { OccupationMixin } from '../lib/Occupation';
import { OfferCatalogMixin } from '../lib/OfferCatalog';
import { OfferMixin } from '../lib/Offer';
import { OrganizationMixin } from '../lib/Organization';
import { OwnershipInfoMixin } from '../lib/OwnershipInfo';
import { PersonMixin } from '../lib/Person';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { ProductMixin } from '../lib/Product';
import { ProgramMembershipMixin } from '../lib/ProgramMembership';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { ThingMixin } from '../lib/Thing';

export const PersonBundle = [
  BrandMixin as Mixin,
  ContactPointMixin as Mixin,
  CountryMixin as Mixin,
  CreativeWorkMixin as Mixin,
  DemandMixin as Mixin,
  DistanceMixin as Mixin,
  EducationalOrganizationMixin as Mixin,
  EventMixin as Mixin,
  InteractionCounterMixin as Mixin,
  LanguageMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  OccupationMixin as Mixin,
  OfferCatalogMixin as Mixin,
  OfferMixin as Mixin,
  OrganizationMixin as Mixin,
  OwnershipInfoMixin as Mixin,
  PersonMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  ProductMixin as Mixin,
  ProgramMembershipMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  ThingMixin as Mixin];
