import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DoseScheduleMixin } from '../lib/DoseSchedule';
import { MaximumDoseScheduleMixin } from '../lib/MaximumDoseSchedule';

export const MaximumDoseScheduleBundle = [
  DoseScheduleMixin as Mixin,
  MaximumDoseScheduleMixin as Mixin];
