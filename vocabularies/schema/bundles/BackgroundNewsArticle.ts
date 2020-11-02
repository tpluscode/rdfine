import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewsArticleMixin } from '../NewsArticle';
import { BackgroundNewsArticleMixin } from '../BackgroundNewsArticle';

export const BackgroundNewsArticleBundle = [
  NewsArticleMixin as Mixin,
  BackgroundNewsArticleMixin as Mixin];
