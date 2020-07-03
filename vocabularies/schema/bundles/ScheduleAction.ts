import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlanActionMixin } from '../PlanAction';
import { ScheduleActionMixin } from '../ScheduleAction';

export const ScheduleActionBundle = [
  PlanActionMixin as Mixin,
  ScheduleActionMixin as Mixin];
