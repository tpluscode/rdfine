import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MediaObjectMixin } from '../lib/MediaObject';
import { NewsArticleMixin } from '../lib/NewsArticle';
import { DurationMixin } from '../lib/Duration';
import { DistanceMixin } from '../lib/Distance';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { OrganizationMixin } from '../lib/Organization';
import { PlaceMixin } from '../lib/Place';
import { MediaSubscriptionMixin } from '../lib/MediaSubscription';

export const MediaObjectBundle = [
  CreativeWorkMixin as Mixin,
  MediaObjectMixin as Mixin,
  NewsArticleMixin as Mixin,
  DurationMixin as Mixin,
  DistanceMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  OrganizationMixin as Mixin,
  PlaceMixin as Mixin,
  MediaSubscriptionMixin as Mixin];
