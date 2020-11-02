import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewsArticleMixin } from '../NewsArticle';
import { OpinionNewsArticleMixin } from '../OpinionNewsArticle';

export const OpinionNewsArticleBundle = [
  NewsArticleMixin as Mixin,
  OpinionNewsArticleMixin as Mixin];
