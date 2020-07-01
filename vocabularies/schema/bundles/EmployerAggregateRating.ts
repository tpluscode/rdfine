import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AggregateRatingMixin } from '../AggregateRating';
import { EmployerAggregateRatingMixin } from '../EmployerAggregateRating';

export const EmployerAggregateRatingBundle = [
  AggregateRatingMixin as Mixin,
  EmployerAggregateRatingMixin as Mixin];
