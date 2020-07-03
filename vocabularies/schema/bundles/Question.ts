import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { QuestionMixin } from '../Question';
import { AnswerMixin } from '../Answer';
import { ItemListMixin } from '../ItemList';

export const QuestionBundle = [
  CreativeWorkMixin as Mixin,
  QuestionMixin as Mixin,
  AnswerMixin as Mixin,
  ItemListMixin as Mixin];
