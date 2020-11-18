import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewsArticleMixin } from '../lib/NewsArticle';
import { ReportageNewsArticleMixin } from '../lib/ReportageNewsArticle';

export const ReportageNewsArticleBundle = [
  NewsArticleMixin as Mixin,
  ReportageNewsArticleMixin as Mixin];
