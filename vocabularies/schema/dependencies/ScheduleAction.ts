import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlanActionMixin } from '../PlanAction';
import { ScheduleActionMixin } from '../ScheduleAction';

export const ScheduleActionDependencies = [
  PlanActionMixin as Mixin,
  ScheduleActionMixin as Mixin];
