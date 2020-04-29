import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BlogPostingMixin } from '../BlogPosting';
import { LiveBlogPostingMixin } from '../LiveBlogPosting';

export const LiveBlogPostingDependencies = [
  BlogPostingMixin as Mixin,
  LiveBlogPostingMixin as Mixin];
