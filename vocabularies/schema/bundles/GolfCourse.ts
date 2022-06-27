import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GolfCourseMixin } from '../lib/GolfCourse';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';

export const GolfCourseBundle = [
  GolfCourseMixin as Mixin,
  SportsActivityLocationMixin as Mixin];
