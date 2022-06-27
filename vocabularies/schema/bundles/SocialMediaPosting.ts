import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ArticleMixin } from '../lib/Article';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { SocialMediaPostingMixin } from '../lib/SocialMediaPosting';

export const SocialMediaPostingBundle = [
  ArticleMixin as Mixin,
  CreativeWorkMixin as Mixin,
  SocialMediaPostingMixin as Mixin];
