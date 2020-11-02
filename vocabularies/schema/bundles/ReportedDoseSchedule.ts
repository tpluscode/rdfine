import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DoseScheduleMixin } from '../DoseSchedule';
import { ReportedDoseScheduleMixin } from '../ReportedDoseSchedule';

export const ReportedDoseScheduleBundle = [
  DoseScheduleMixin as Mixin,
  ReportedDoseScheduleMixin as Mixin];
