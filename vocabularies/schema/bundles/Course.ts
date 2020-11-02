import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { LearningResourceMixin } from '../LearningResource';
import { CourseMixin } from '../Course';
import { AlignmentObjectMixin } from '../AlignmentObject';
import { CourseInstanceMixin } from '../CourseInstance';
import { StructuredValueMixin } from '../StructuredValue';

export const CourseBundle = [
  CreativeWorkMixin as Mixin,
  LearningResourceMixin as Mixin,
  CourseMixin as Mixin,
  AlignmentObjectMixin as Mixin,
  CourseInstanceMixin as Mixin,
  StructuredValueMixin as Mixin];
