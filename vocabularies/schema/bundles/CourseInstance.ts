import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { CourseInstanceMixin } from '../CourseInstance';
import { PersonMixin } from '../Person';

export const CourseInstanceBundle = [
  EventMixin as Mixin,
  CourseInstanceMixin as Mixin,
  PersonMixin as Mixin];
