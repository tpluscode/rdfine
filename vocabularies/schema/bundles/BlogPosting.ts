import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BlogPostingMixin } from '../lib/BlogPosting';
import { SocialMediaPostingMixin } from '../lib/SocialMediaPosting';

export const BlogPostingBundle = [
  BlogPostingMixin as Mixin,
  SocialMediaPostingMixin as Mixin];
