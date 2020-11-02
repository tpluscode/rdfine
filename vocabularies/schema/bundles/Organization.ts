import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../Thing';
import { OrganizationMixin } from '../Organization';
import { CreativeWorkMixin } from '../CreativeWork';
import { PostalAddressMixin } from '../PostalAddress';
import { AggregateRatingMixin } from '../AggregateRating';
import { PersonMixin } from '../Person';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { GeoShapeMixin } from '../GeoShape';
import { PlaceMixin } from '../Place';
import { BrandMixin } from '../Brand';
import { ContactPointMixin } from '../ContactPoint';
import { ArticleMixin } from '../Article';
import { EventMixin } from '../Event';
import { MerchantReturnPolicyMixin } from '../MerchantReturnPolicy';
import { OfferCatalogMixin } from '../OfferCatalog';
import { InteractionCounterMixin } from '../InteractionCounter';
import { LanguageMixin } from '../Language';
import { ImageObjectMixin } from '../ImageObject';
import { OfferMixin } from '../Offer';
import { ProgramMembershipMixin } from '../ProgramMembership';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { AboutPageMixin } from '../AboutPage';
import { OwnershipInfoMixin } from '../OwnershipInfo';
import { ProductMixin } from '../Product';
import { ReviewMixin } from '../Review';
import { DemandMixin } from '../Demand';

export const OrganizationBundle = [
  ThingMixin as Mixin,
  OrganizationMixin as Mixin,
  CreativeWorkMixin as Mixin,
  PostalAddressMixin as Mixin,
  AggregateRatingMixin as Mixin,
  PersonMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin,
  BrandMixin as Mixin,
  ContactPointMixin as Mixin,
  ArticleMixin as Mixin,
  EventMixin as Mixin,
  MerchantReturnPolicyMixin as Mixin,
  OfferCatalogMixin as Mixin,
  InteractionCounterMixin as Mixin,
  LanguageMixin as Mixin,
  ImageObjectMixin as Mixin,
  OfferMixin as Mixin,
  ProgramMembershipMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  AboutPageMixin as Mixin,
  OwnershipInfoMixin as Mixin,
  ProductMixin as Mixin,
  ReviewMixin as Mixin,
  DemandMixin as Mixin];
