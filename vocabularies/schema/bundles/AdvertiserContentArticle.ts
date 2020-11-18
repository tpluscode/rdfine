import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../lib/Article';
import { AdvertiserContentArticleMixin } from '../lib/AdvertiserContentArticle';

export const AdvertiserContentArticleBundle = [
  ArticleMixin as Mixin,
  AdvertiserContentArticleMixin as Mixin];
