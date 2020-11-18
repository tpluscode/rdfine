import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../lib/Article';
import { NewsArticleMixin } from '../lib/NewsArticle';

export const NewsArticleBundle = [
  ArticleMixin as Mixin,
  NewsArticleMixin as Mixin];
