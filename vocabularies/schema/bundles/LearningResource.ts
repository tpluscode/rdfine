import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { LearningResourceMixin } from '../lib/LearningResource';
import { AlignmentObjectMixin } from '../lib/AlignmentObject';

export const LearningResourceBundle = [
  CreativeWorkMixin as Mixin,
  LearningResourceMixin as Mixin,
  AlignmentObjectMixin as Mixin];
