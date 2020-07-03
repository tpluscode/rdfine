import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SocialMediaPostingMixin } from '../SocialMediaPosting';
import { BlogPostingMixin } from '../BlogPosting';

export const BlogPostingBundle = [
  SocialMediaPostingMixin as Mixin,
  BlogPostingMixin as Mixin];
