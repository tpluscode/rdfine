import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { LearningResourceMixin } from '../LearningResource';
import { AlignmentObjectMixin } from '../AlignmentObject';

export const LearningResourceBundle = [
  CreativeWorkMixin as Mixin,
  LearningResourceMixin as Mixin,
  AlignmentObjectMixin as Mixin];
