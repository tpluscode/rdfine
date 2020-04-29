import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../Article';
import { TechArticleMixin } from '../TechArticle';

export const TechArticleDependencies = [
  ArticleMixin as Mixin,
  TechArticleMixin as Mixin];
