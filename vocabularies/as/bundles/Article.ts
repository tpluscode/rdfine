import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../lib/Article';
import { ObjectMixin } from '../lib/Object';

export const ArticleBundle = [
  ArticleMixin as Mixin,
  ObjectMixin as Mixin];
