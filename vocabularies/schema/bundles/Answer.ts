import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommentMixin } from '../lib/Comment';
import { AnswerMixin } from '../lib/Answer';
import { WebContentMixin } from '../lib/WebContent';

export const AnswerBundle = [
  CommentMixin as Mixin,
  AnswerMixin as Mixin,
  WebContentMixin as Mixin];
