import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { MediaObjectMixin } from '../lib/MediaObject';
import { NewsArticleMixin } from '../lib/NewsArticle';
import { DurationMixin } from '../lib/Duration';
import { DistanceMixin } from '../lib/Distance';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { PlaceMixin } from '../lib/Place';
import { GeoShapeMixin } from '../lib/GeoShape';
import { ClaimMixin } from '../lib/Claim';
import { OrganizationMixin } from '../lib/Organization';
import { MediaSubscriptionMixin } from '../lib/MediaSubscription';

export const MediaObjectBundle = [
  CreativeWorkMixin as Mixin,
  MediaObjectMixin as Mixin,
  NewsArticleMixin as Mixin,
  DurationMixin as Mixin,
  DistanceMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  PlaceMixin as Mixin,
  GeoShapeMixin as Mixin,
  ClaimMixin as Mixin,
  OrganizationMixin as Mixin,
  MediaSubscriptionMixin as Mixin];
