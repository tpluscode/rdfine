import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { BlogMixin } from '../Blog';
import { BlogPostingMixin } from '../BlogPosting';

export const BlogBundle = [
  CreativeWorkMixin as Mixin,
  BlogMixin as Mixin,
  BlogPostingMixin as Mixin];
