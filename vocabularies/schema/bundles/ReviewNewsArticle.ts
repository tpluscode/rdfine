import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CriticReviewMixin } from '../CriticReview';
import { NewsArticleMixin } from '../NewsArticle';
import { ReviewNewsArticleMixin } from '../ReviewNewsArticle';

export const ReviewNewsArticleBundle = [
  CriticReviewMixin as Mixin,
  NewsArticleMixin as Mixin,
  ReviewNewsArticleMixin as Mixin];
