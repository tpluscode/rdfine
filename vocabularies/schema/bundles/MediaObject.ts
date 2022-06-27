import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ClaimMixin } from '../lib/Claim';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DistanceMixin } from '../lib/Distance';
import { DurationMixin } from '../lib/Duration';
import { GeoShapeMixin } from '../lib/GeoShape';
import { MediaObjectMixin } from '../lib/MediaObject';
import { MediaSubscriptionMixin } from '../lib/MediaSubscription';
import { NewsArticleMixin } from '../lib/NewsArticle';
import { OrganizationMixin } from '../lib/Organization';
import { PlaceMixin } from '../lib/Place';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const MediaObjectBundle = [
  ClaimMixin as Mixin,
  CreativeWorkMixin as Mixin,
  DistanceMixin as Mixin,
  DurationMixin as Mixin,
  GeoShapeMixin as Mixin,
  MediaObjectMixin as Mixin,
  MediaSubscriptionMixin as Mixin,
  NewsArticleMixin as Mixin,
  OrganizationMixin as Mixin,
  PlaceMixin as Mixin,
  QuantitativeValueMixin as Mixin];
