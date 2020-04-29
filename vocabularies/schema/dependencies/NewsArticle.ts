import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../Article';
import { NewsArticleMixin } from '../NewsArticle';

export const NewsArticleDependencies = [
  ArticleMixin as Mixin,
  NewsArticleMixin as Mixin];
