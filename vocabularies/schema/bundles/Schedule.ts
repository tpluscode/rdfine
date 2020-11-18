import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ScheduleMixin } from '../lib/Schedule';
import { DurationMixin } from '../lib/Duration';

export const ScheduleBundle = [
  IntangibleMixin as Mixin,
  ScheduleMixin as Mixin,
  DurationMixin as Mixin];
