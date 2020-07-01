import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommentMixin } from '../Comment';
import { AnswerMixin } from '../Answer';

export const AnswerBundle = [
  CommentMixin as Mixin,
  AnswerMixin as Mixin];
