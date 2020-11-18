import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../lib/Article';
import { TechArticleMixin } from '../lib/TechArticle';

export const TechArticleBundle = [
  ArticleMixin as Mixin,
  TechArticleMixin as Mixin];
