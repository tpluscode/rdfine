import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CommentMixin } from '../lib/Comment';
import { QuestionMixin } from '../lib/Question';
import { AnswerMixin } from '../lib/Answer';
import { ItemListMixin } from '../lib/ItemList';

export const QuestionBundle = [
  CommentMixin as Mixin,
  QuestionMixin as Mixin,
  AnswerMixin as Mixin,
  ItemListMixin as Mixin];
