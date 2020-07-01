import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { CommentMixin } from '../Comment';
import { QuestionMixin } from '../Question';

export const CommentBundle = [
  CreativeWorkMixin as Mixin,
  CommentMixin as Mixin,
  QuestionMixin as Mixin];
