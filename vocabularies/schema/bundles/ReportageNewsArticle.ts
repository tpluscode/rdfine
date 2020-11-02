import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewsArticleMixin } from '../NewsArticle';
import { ReportageNewsArticleMixin } from '../ReportageNewsArticle';

export const ReportageNewsArticleBundle = [
  NewsArticleMixin as Mixin,
  ReportageNewsArticleMixin as Mixin];
