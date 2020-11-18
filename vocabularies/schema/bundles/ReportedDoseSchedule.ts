import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DoseScheduleMixin } from '../lib/DoseSchedule';
import { ReportedDoseScheduleMixin } from '../lib/ReportedDoseSchedule';

export const ReportedDoseScheduleBundle = [
  DoseScheduleMixin as Mixin,
  ReportedDoseScheduleMixin as Mixin];
