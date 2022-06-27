import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { RatingMixin } from '../lib/Rating';
import { ThingMixin } from '../lib/Thing';

export const AggregateRatingBundle = [
  AggregateRatingMixin as Mixin,
  RatingMixin as Mixin,
  ThingMixin as Mixin];
