import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../lib/Article';
import { SatiricalArticleMixin } from '../lib/SatiricalArticle';

export const SatiricalArticleBundle = [
  ArticleMixin as Mixin,
  SatiricalArticleMixin as Mixin];
