import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { OrganizationMixin } from '../lib/Organization';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { PersonMixin } from '../lib/Person';
import { PlaceMixin } from '../lib/Place';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { GeoShapeMixin } from '../lib/GeoShape';
import { BrandMixin } from '../lib/Brand';
import { ContactPointMixin } from '../lib/ContactPoint';
import { ArticleMixin } from '../lib/Article';
import { EventMixin } from '../lib/Event';
import { MerchantReturnPolicyMixin } from '../lib/MerchantReturnPolicy';
import { OfferCatalogMixin } from '../lib/OfferCatalog';
import { InteractionCounterMixin } from '../lib/InteractionCounter';
import { LanguageMixin } from '../lib/Language';
import { ImageObjectMixin } from '../lib/ImageObject';
import { OfferMixin } from '../lib/Offer';
import { ProgramMembershipMixin } from '../lib/ProgramMembership';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { AboutPageMixin } from '../lib/AboutPage';
import { ProductMixin } from '../lib/Product';
import { OwnershipInfoMixin } from '../lib/OwnershipInfo';
import { ReviewMixin } from '../lib/Review';
import { DemandMixin } from '../lib/Demand';

export const OrganizationBundle = [
  ThingMixin as Mixin,
  OrganizationMixin as Mixin,
  CreativeWorkMixin as Mixin,
  PostalAddressMixin as Mixin,
  AggregateRatingMixin as Mixin,
  PersonMixin as Mixin,
  PlaceMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
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
  ProductMixin as Mixin,
  OwnershipInfoMixin as Mixin,
  ReviewMixin as Mixin,
  DemandMixin as Mixin];
