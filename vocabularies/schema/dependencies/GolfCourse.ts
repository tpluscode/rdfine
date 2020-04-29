import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { GolfCourseMixin } from '../GolfCourse';

export const GolfCourseDependencies = [
  SportsActivityLocationMixin as Mixin,
  GolfCourseMixin as Mixin];
