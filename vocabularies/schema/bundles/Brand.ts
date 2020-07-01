import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { BrandMixin } from '../Brand';
import { AggregateRatingMixin } from '../AggregateRating';
import { ImageObjectMixin } from '../ImageObject';
import { ReviewMixin } from '../Review';

export const BrandBundle = [
  IntangibleMixin as Mixin,
  BrandMixin as Mixin,
  AggregateRatingMixin as Mixin,
  ImageObjectMixin as Mixin,
  ReviewMixin as Mixin];
