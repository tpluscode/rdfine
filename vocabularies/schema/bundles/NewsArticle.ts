import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../Article';
import { NewsArticleMixin } from '../NewsArticle';

export const NewsArticleBundle = [
  ArticleMixin as Mixin,
  NewsArticleMixin as Mixin];
