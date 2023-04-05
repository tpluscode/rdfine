import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../lib/Article';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { SpeakableSpecificationMixin } from '../lib/SpeakableSpecification';

export const ArticleBundle = [
  ArticleMixin as Mixin,
  CreativeWorkMixin as Mixin,
  SpeakableSpecificationMixin as Mixin];
