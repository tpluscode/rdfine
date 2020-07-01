import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RatingMixin } from '../Rating';
import { EndorsementRatingMixin } from '../EndorsementRating';

export const EndorsementRatingBundle = [
  RatingMixin as Mixin,
  EndorsementRatingMixin as Mixin];
