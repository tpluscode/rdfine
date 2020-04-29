import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RatingMixin } from '../Rating';
import { EndorsementRatingMixin } from '../EndorsementRating';

export const EndorsementRatingDependencies = [
  RatingMixin as Mixin,
  EndorsementRatingMixin as Mixin];
