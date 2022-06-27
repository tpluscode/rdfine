import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommentMixin } from '../lib/Comment';
import { CreativeWorkMixin } from '../lib/CreativeWork';

export const CommentBundle = [
  CommentMixin as Mixin,
  CreativeWorkMixin as Mixin];
