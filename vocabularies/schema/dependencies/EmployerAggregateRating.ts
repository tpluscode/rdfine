import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AggregateRatingMixin } from '../AggregateRating';
import { EmployerAggregateRatingMixin } from '../EmployerAggregateRating';

export const EmployerAggregateRatingDependencies = [
  AggregateRatingMixin as Mixin,
  EmployerAggregateRatingMixin as Mixin];
