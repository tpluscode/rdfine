import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RatingMixin } from '../Rating';
import { AggregateRatingMixin } from '../AggregateRating';
import { ThingMixin } from '../Thing';

export const AggregateRatingBundle = [
  RatingMixin as Mixin,
  AggregateRatingMixin as Mixin,
  ThingMixin as Mixin];
