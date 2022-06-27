import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CourseInstanceMixin } from '../lib/CourseInstance';
import { EventMixin } from '../lib/Event';
import { PersonMixin } from '../lib/Person';

export const CourseInstanceBundle = [
  CourseInstanceMixin as Mixin,
  EventMixin as Mixin,
  PersonMixin as Mixin];
