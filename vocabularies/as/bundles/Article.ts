import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ObjectMixin } from '../lib/Object';
import { ArticleMixin } from '../lib/Article';

export const ArticleBundle = [
  ObjectMixin as Mixin,
  ArticleMixin as Mixin];
