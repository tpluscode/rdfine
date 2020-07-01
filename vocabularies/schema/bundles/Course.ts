import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { CourseMixin } from '../Course';
import { AlignmentObjectMixin } from '../AlignmentObject';
import { CourseInstanceMixin } from '../CourseInstance';

export const CourseBundle = [
  CreativeWorkMixin as Mixin,
  CourseMixin as Mixin,
  AlignmentObjectMixin as Mixin,
  CourseInstanceMixin as Mixin];
