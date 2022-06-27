import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { AudienceMixin } from '../lib/Audience';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DemandMixin } from '../lib/Demand';
import { DurationMixin } from '../lib/Duration';
import { EventMixin } from '../lib/Event';
import { LanguageMixin } from '../lib/Language';
import { OfferMixin } from '../lib/Offer';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { ReviewMixin } from '../lib/Review';
import { ScheduleMixin } from '../lib/Schedule';
import { ThingMixin } from '../lib/Thing';

export const EventBundle = [
  AggregateRatingMixin as Mixin,
  AudienceMixin as Mixin,
  CreativeWorkMixin as Mixin,
  DemandMixin as Mixin,
  DurationMixin as Mixin,
  EventMixin as Mixin,
  LanguageMixin as Mixin,
  OfferMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin,
  ReviewMixin as Mixin,
  ScheduleMixin as Mixin,
  ThingMixin as Mixin];
