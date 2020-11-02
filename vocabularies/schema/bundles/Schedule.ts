import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ScheduleMixin } from '../Schedule';
import { DurationMixin } from '../Duration';

export const ScheduleBundle = [
  IntangibleMixin as Mixin,
  ScheduleMixin as Mixin,
  DurationMixin as Mixin];
