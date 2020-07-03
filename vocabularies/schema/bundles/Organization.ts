import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../Thing';
import { OrganizationMixin } from '../Organization';
import { PostalAddressMixin } from '../PostalAddress';
import { AggregateRatingMixin } from '../AggregateRating';
import { PersonMixin } from '../Person';
import { AdministrativeAreaMixin } from '../AdministrativeArea';
import { GeoShapeMixin } from '../GeoShape';
import { PlaceMixin } from '../Place';
import { BrandMixin } from '../Brand';
import { ContactPointMixin } from '../ContactPoint';
import { EventMixin } from '../Event';
import { OfferCatalogMixin } from '../OfferCatalog';
import { InteractionCounterMixin } from '../InteractionCounter';
import { ImageObjectMixin } from '../ImageObject';
import { OfferMixin } from '../Offer';
import { ProgramMembershipMixin } from '../ProgramMembership';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { OwnershipInfoMixin } from '../OwnershipInfo';
import { ProductMixin } from '../Product';
import { CreativeWorkMixin } from '../CreativeWork';
import { ReviewMixin } from '../Review';
import { DemandMixin } from '../Demand';

export const OrganizationBundle = [
  ThingMixin as Mixin,
  OrganizationMixin as Mixin,
  PostalAddressMixin as Mixin,
  AggregateRatingMixin as Mixin,
  PersonMixin as Mixin,
  AdministrativeAreaMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin,
  BrandMixin as Mixin,
  ContactPointMixin as Mixin,
  EventMixin as Mixin,
  OfferCatalogMixin as Mixin,
  InteractionCounterMixin as Mixin,
  ImageObjectMixin as Mixin,
  OfferMixin as Mixin,
  ProgramMembershipMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  OwnershipInfoMixin as Mixin,
  ProductMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ReviewMixin as Mixin,
  DemandMixin as Mixin];
