import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SocialMediaPostingMixin } from '../SocialMediaPosting';
import { BlogPostingMixin } from '../BlogPosting';

export const BlogPostingDependencies = [
  SocialMediaPostingMixin as Mixin,
  BlogPostingMixin as Mixin];
