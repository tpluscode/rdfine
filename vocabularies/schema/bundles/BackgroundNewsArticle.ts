import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BackgroundNewsArticleMixin } from '../lib/BackgroundNewsArticle';
import { NewsArticleMixin } from '../lib/NewsArticle';

export const BackgroundNewsArticleBundle = [
  BackgroundNewsArticleMixin as Mixin,
  NewsArticleMixin as Mixin];
