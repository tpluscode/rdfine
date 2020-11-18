import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewsArticleMixin } from '../lib/NewsArticle';
import { BackgroundNewsArticleMixin } from '../lib/BackgroundNewsArticle';

export const BackgroundNewsArticleBundle = [
  NewsArticleMixin as Mixin,
  BackgroundNewsArticleMixin as Mixin];
