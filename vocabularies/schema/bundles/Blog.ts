import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { BlogMixin } from '../lib/Blog';
import { BlogPostingMixin } from '../lib/BlogPosting';

export const BlogBundle = [
  CreativeWorkMixin as Mixin,
  BlogMixin as Mixin,
  BlogPostingMixin as Mixin];
