import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { NewsArticleMixin } from '../NewsArticle';
import { AnalysisNewsArticleMixin } from '../AnalysisNewsArticle';

export const AnalysisNewsArticleBundle = [
  NewsArticleMixin as Mixin,
  AnalysisNewsArticleMixin as Mixin];
