import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { ArticleMixin } from '../lib/Article';
import { SpeakableSpecificationMixin } from '../lib/SpeakableSpecification';

export const ArticleBundle = [
  CreativeWorkMixin as Mixin,
  ArticleMixin as Mixin,
  SpeakableSpecificationMixin as Mixin];
