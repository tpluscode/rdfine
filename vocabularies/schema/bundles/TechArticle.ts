import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../Article';
import { TechArticleMixin } from '../TechArticle';

export const TechArticleBundle = [
  ArticleMixin as Mixin,
  TechArticleMixin as Mixin];
