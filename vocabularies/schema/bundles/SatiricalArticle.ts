import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../Article';
import { SatiricalArticleMixin } from '../SatiricalArticle';

export const SatiricalArticleBundle = [
  ArticleMixin as Mixin,
  SatiricalArticleMixin as Mixin];
