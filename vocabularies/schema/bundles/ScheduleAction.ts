import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlanActionMixin } from '../lib/PlanAction';
import { ScheduleActionMixin } from '../lib/ScheduleAction';

export const ScheduleActionBundle = [
  PlanActionMixin as Mixin,
  ScheduleActionMixin as Mixin];
