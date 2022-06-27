import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnswerMixin } from '../lib/Answer';
import { CommentMixin } from '../lib/Comment';
import { WebContentMixin } from '../lib/WebContent';

export const AnswerBundle = [
  AnswerMixin as Mixin,
  CommentMixin as Mixin,
  WebContentMixin as Mixin];
