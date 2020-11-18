import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SocialMediaPostingMixin } from '../lib/SocialMediaPosting';
import { BlogPostingMixin } from '../lib/BlogPosting';

export const BlogPostingBundle = [
  SocialMediaPostingMixin as Mixin,
  BlogPostingMixin as Mixin];
