import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CriticReviewMixin } from '../lib/CriticReview';
import { NewsArticleMixin } from '../lib/NewsArticle';
import { ReviewNewsArticleMixin } from '../lib/ReviewNewsArticle';

export const ReviewNewsArticleBundle = [
  CriticReviewMixin as Mixin,
  NewsArticleMixin as Mixin,
  ReviewNewsArticleMixin as Mixin];
