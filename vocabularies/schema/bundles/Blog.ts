import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BlogMixin } from '../lib/Blog';
import { BlogPostingMixin } from '../lib/BlogPosting';
import { CreativeWorkMixin } from '../lib/CreativeWork';

export const BlogBundle = [
  BlogMixin as Mixin,
  BlogPostingMixin as Mixin,
  CreativeWorkMixin as Mixin];
