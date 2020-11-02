import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../Article';
import { AdvertiserContentArticleMixin } from '../AdvertiserContentArticle';

export const AdvertiserContentArticleBundle = [
  ArticleMixin as Mixin,
  AdvertiserContentArticleMixin as Mixin];
