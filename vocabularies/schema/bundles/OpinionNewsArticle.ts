import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewsArticleMixin } from '../lib/NewsArticle';
import { OpinionNewsArticleMixin } from '../lib/OpinionNewsArticle';

export const OpinionNewsArticleBundle = [
  NewsArticleMixin as Mixin,
  OpinionNewsArticleMixin as Mixin];
