import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewsArticleMixin } from '../lib/NewsArticle';
import { CriticReviewMixin } from '../lib/CriticReview';
import { ReviewNewsArticleMixin } from '../lib/ReviewNewsArticle';

export const ReviewNewsArticleBundle = [
  NewsArticleMixin as Mixin,
  CriticReviewMixin as Mixin,
  ReviewNewsArticleMixin as Mixin];
