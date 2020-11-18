import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewsArticleMixin } from '../lib/NewsArticle';
import { AnalysisNewsArticleMixin } from '../lib/AnalysisNewsArticle';

export const AnalysisNewsArticleBundle = [
  NewsArticleMixin as Mixin,
  AnalysisNewsArticleMixin as Mixin];
