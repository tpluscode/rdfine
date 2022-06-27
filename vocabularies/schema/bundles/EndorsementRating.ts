import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EndorsementRatingMixin } from '../lib/EndorsementRating';
import { RatingMixin } from '../lib/Rating';

export const EndorsementRatingBundle = [
  EndorsementRatingMixin as Mixin,
  RatingMixin as Mixin];
