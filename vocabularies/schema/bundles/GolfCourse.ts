import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { GolfCourseMixin } from '../lib/GolfCourse';

export const GolfCourseBundle = [
  SportsActivityLocationMixin as Mixin,
  GolfCourseMixin as Mixin];
