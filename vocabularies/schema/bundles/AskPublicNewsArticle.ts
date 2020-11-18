import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewsArticleMixin } from '../lib/NewsArticle';
import { AskPublicNewsArticleMixin } from '../lib/AskPublicNewsArticle';

export const AskPublicNewsArticleBundle = [
  NewsArticleMixin as Mixin,
  AskPublicNewsArticleMixin as Mixin];
