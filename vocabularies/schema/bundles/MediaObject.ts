import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { MediaObjectMixin } from '../MediaObject';
import { NewsArticleMixin } from '../NewsArticle';
import { DurationMixin } from '../Duration';
import { DistanceMixin } from '../Distance';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { OrganizationMixin } from '../Organization';
import { PlaceMixin } from '../Place';
import { MediaSubscriptionMixin } from '../MediaSubscription';

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
