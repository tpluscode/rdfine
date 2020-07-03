import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { ReviewMixin } from '../Review';
import { ThingMixin } from '../Thing';
import { RatingMixin } from '../Rating';

export const ReviewBundle = [
  CreativeWorkMixin as Mixin,
  ReviewMixin as Mixin,
  ThingMixin as Mixin,
  RatingMixin as Mixin];
