import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AskPublicNewsArticleMixin } from '../lib/AskPublicNewsArticle';
import { NewsArticleMixin } from '../lib/NewsArticle';

export const AskPublicNewsArticleBundle = [
  AskPublicNewsArticleMixin as Mixin,
  NewsArticleMixin as Mixin];
