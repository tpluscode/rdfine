import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DoseScheduleMixin } from '../DoseSchedule';
import { MaximumDoseScheduleMixin } from '../MaximumDoseSchedule';

export const MaximumDoseScheduleBundle = [
  DoseScheduleMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin];
