import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { CommentMixin } from '../lib/Comment';
import { QuestionMixin } from '../lib/Question';

export const CommentBundle = [
  CreativeWorkMixin as Mixin,
  CommentMixin as Mixin,
  QuestionMixin as Mixin];
