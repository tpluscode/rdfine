import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BlogPostingMixin } from '../BlogPosting';
import { LiveBlogPostingMixin } from '../LiveBlogPosting';

export const LiveBlogPostingBundle = [
  BlogPostingMixin as Mixin,
  LiveBlogPostingMixin as Mixin];
