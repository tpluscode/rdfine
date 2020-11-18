import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { BrandMixin } from '../lib/Brand';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { ImageObjectMixin } from '../lib/ImageObject';
import { ReviewMixin } from '../lib/Review';

export const BrandBundle = [
  IntangibleMixin as Mixin,
  BrandMixin as Mixin,
  AggregateRatingMixin as Mixin,
  ImageObjectMixin as Mixin,
  ReviewMixin as Mixin];
