import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AlignmentObjectMixin } from '../lib/AlignmentObject';
import { CourseInstanceMixin } from '../lib/CourseInstance';
import { CourseMixin } from '../lib/Course';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { LearningResourceMixin } from '../lib/LearningResource';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const CourseBundle = [
  AlignmentObjectMixin as Mixin,
  CourseInstanceMixin as Mixin,
  CourseMixin as Mixin,
  CreativeWorkMixin as Mixin,
  LearningResourceMixin as Mixin,
  StructuredValueMixin as Mixin];
