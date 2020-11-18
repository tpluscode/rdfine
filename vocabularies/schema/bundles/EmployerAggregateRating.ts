import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { EmployerAggregateRatingMixin } from '../lib/EmployerAggregateRating';

export const EmployerAggregateRatingBundle = [
  AggregateRatingMixin as Mixin,
  EmployerAggregateRatingMixin as Mixin];
