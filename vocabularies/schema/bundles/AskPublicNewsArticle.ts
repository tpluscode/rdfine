import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewsArticleMixin } from '../NewsArticle';
import { AskPublicNewsArticleMixin } from '../AskPublicNewsArticle';

export const AskPublicNewsArticleBundle = [
  NewsArticleMixin as Mixin,
  AskPublicNewsArticleMixin as Mixin];
