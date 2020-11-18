import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { CourseInstanceMixin } from '../lib/CourseInstance';
import { PersonMixin } from '../lib/Person';

export const CourseInstanceBundle = [
  EventMixin as Mixin,
  CourseInstanceMixin as Mixin,
  PersonMixin as Mixin];
