import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LearningResourceMixin } from '../LearningResource';
import { QuizMixin } from '../Quiz';

export const QuizBundle = [
  LearningResourceMixin as Mixin,
  QuizMixin as Mixin];
