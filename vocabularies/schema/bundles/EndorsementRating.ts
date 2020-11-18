import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { RatingMixin } from '../lib/Rating';
import { EndorsementRatingMixin } from '../lib/EndorsementRating';

export const EndorsementRatingBundle = [
  RatingMixin as Mixin,
  EndorsementRatingMixin as Mixin];
