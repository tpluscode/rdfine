import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../lib/Article';
import { SocialMediaPostingMixin } from '../lib/SocialMediaPosting';
import { CreativeWorkMixin } from '../lib/CreativeWork';

export const SocialMediaPostingBundle = [
  ArticleMixin as Mixin,
  SocialMediaPostingMixin as Mixin,
  CreativeWorkMixin as Mixin];
