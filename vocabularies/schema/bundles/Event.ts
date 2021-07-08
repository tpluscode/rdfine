import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { EventMixin } from '../lib/Event';
import { PersonMixin } from '../lib/Person';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { OrganizationMixin } from '../lib/Organization';
import { AudienceMixin } from '../lib/Audience';
import { DurationMixin } from '../lib/Duration';
import { ScheduleMixin } from '../lib/Schedule';
import { LanguageMixin } from '../lib/Language';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { OfferMixin } from '../lib/Offer';
import { DemandMixin } from '../lib/Demand';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ReviewMixin } from '../lib/Review';

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
  OfferMixin as Mixin,
  DemandMixin as Mixin,
  CreativeWorkMixin as Mixin,
  ReviewMixin as Mixin];
