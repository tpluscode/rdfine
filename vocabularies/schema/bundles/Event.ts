import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../Thing';
import { EventMixin } from '../Event';
import { PersonMixin } from '../Person';
import { AggregateRatingMixin } from '../AggregateRating';
import { OrganizationMixin } from '../Organization';
import { AudienceMixin } from '../Audience';
import { DurationMixin } from '../Duration';
import { ScheduleMixin } from '../Schedule';
import { LanguageMixin } from '../Language';
import { PlaceMixin } from '../Place';
import { PostalAddressMixin } from '../PostalAddress';
import { DemandMixin } from '../Demand';
import { OfferMixin } from '../Offer';
import { CreativeWorkMixin } from '../CreativeWork';
import { ReviewMixin } from '../Review';

export const EventBundle = [
  ThingMixin as Mixin,
  EventMixin as Mixin,
  PersonMixin as Mixin,
  AggregateRatingMixin as Mixin,
  OrganizationMixin as Mixin,
  AudienceMixin as Mixin,
  DurationMixin as Mixin,
  ScheduleMixin as Mixin,
  LanguageMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin,
  DemandMixin as Mixin,
  OfferMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ReviewMixin as Mixin];
