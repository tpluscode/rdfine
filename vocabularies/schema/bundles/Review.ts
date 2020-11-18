import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ReviewMixin } from '../lib/Review';
import { ThingMixin } from '../lib/Thing';
import { RatingMixin } from '../lib/Rating';

export const ReviewBundle = [
  CreativeWorkMixin as Mixin,
  ReviewMixin as Mixin,
  ThingMixin as Mixin,
  RatingMixin as Mixin];
