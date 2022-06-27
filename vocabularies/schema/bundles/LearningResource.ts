import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AlignmentObjectMixin } from '../lib/AlignmentObject';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { LearningResourceMixin } from '../lib/LearningResource';

export const LearningResourceBundle = [
  AlignmentObjectMixin as Mixin,
  CreativeWorkMixin as Mixin,
  LearningResourceMixin as Mixin];
