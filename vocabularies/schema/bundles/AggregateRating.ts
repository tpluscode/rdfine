import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RatingMixin } from '../lib/Rating';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { ThingMixin } from '../lib/Thing';

export const AggregateRatingBundle = [
  RatingMixin as Mixin,
  AggregateRatingMixin as Mixin,
  ThingMixin as Mixin];
