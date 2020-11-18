import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { LearningResourceMixin } from '../lib/LearningResource';
import { CourseMixin } from '../lib/Course';
import { AlignmentObjectMixin } from '../lib/AlignmentObject';
import { CourseInstanceMixin } from '../lib/CourseInstance';
import { StructuredValueMixin } from '../lib/StructuredValue';

export const CourseBundle = [
  CreativeWorkMixin as Mixin,
  LearningResourceMixin as Mixin,
  CourseMixin as Mixin,
  AlignmentObjectMixin as Mixin,
  CourseInstanceMixin as Mixin,
  StructuredValueMixin as Mixin];
