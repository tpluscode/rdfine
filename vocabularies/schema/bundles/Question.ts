import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { QuestionMixin } from '../lib/Question';
import { AnswerMixin } from '../lib/Answer';
import { ItemListMixin } from '../lib/ItemList';

export const QuestionBundle = [
  CreativeWorkMixin as Mixin,
  QuestionMixin as Mixin,
  AnswerMixin as Mixin,
  ItemListMixin as Mixin];
