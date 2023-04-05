import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnswerMixin } from '../lib/Answer';
import { CommentMixin } from '../lib/Comment';
import { ItemListMixin } from '../lib/ItemList';
import { QuestionMixin } from '../lib/Question';

export const QuestionBundle = [
  AnswerMixin as Mixin,
  CommentMixin as Mixin,
  ItemListMixin as Mixin,
  QuestionMixin as Mixin];
