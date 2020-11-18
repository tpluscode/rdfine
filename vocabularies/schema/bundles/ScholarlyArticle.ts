import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../lib/Article';
import { ScholarlyArticleMixin } from '../lib/ScholarlyArticle';

export const ScholarlyArticleBundle = [
  ArticleMixin as Mixin,
  ScholarlyArticleMixin as Mixin];
