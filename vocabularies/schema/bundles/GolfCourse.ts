import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { GolfCourseMixin } from '../GolfCourse';

export const GolfCourseBundle = [
  SportsActivityLocationMixin as Mixin,
  GolfCourseMixin as Mixin];
