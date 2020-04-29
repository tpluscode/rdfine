import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../Article';
import { ScholarlyArticleMixin } from '../ScholarlyArticle';

export const ScholarlyArticleDependencies = [
  ArticleMixin as Mixin,
  ScholarlyArticleMixin as Mixin];
