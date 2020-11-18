import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LearningResourceMixin } from '../lib/LearningResource';
import { QuizMixin } from '../lib/Quiz';

export const QuizBundle = [
  LearningResourceMixin as Mixin,
  QuizMixin as Mixin];
