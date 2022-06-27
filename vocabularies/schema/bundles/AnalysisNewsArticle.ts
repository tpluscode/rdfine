import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnalysisNewsArticleMixin } from '../lib/AnalysisNewsArticle';
import { NewsArticleMixin } from '../lib/NewsArticle';

export const AnalysisNewsArticleBundle = [
  AnalysisNewsArticleMixin as Mixin,
  NewsArticleMixin as Mixin];
