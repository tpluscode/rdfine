import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdvertiserContentArticleMixin } from '../lib/AdvertiserContentArticle';
import { ArticleMixin } from '../lib/Article';

export const AdvertiserContentArticleBundle = [
  AdvertiserContentArticleMixin as Mixin,
  ArticleMixin as Mixin];
