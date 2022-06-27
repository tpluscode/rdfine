import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { BrandMixin } from '../lib/Brand';
import { ImageObjectMixin } from '../lib/ImageObject';
import { IntangibleMixin } from '../lib/Intangible';
import { ReviewMixin } from '../lib/Review';

export const BrandBundle = [
  AggregateRatingMixin as Mixin,
  BrandMixin as Mixin,
  ImageObjectMixin as Mixin,
  IntangibleMixin as Mixin,
  ReviewMixin as Mixin];
