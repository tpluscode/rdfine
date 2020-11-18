import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BlogPostingMixin } from '../lib/BlogPosting';
import { LiveBlogPostingMixin } from '../lib/LiveBlogPosting';

export const LiveBlogPostingBundle = [
  BlogPostingMixin as Mixin,
  LiveBlogPostingMixin as Mixin];
