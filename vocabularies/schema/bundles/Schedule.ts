import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DurationMixin } from '../lib/Duration';
import { IntangibleMixin } from '../lib/Intangible';
import { ScheduleMixin } from '../lib/Schedule';

export const ScheduleBundle = [
  DurationMixin as Mixin,
  IntangibleMixin as Mixin,
  ScheduleMixin as Mixin];
