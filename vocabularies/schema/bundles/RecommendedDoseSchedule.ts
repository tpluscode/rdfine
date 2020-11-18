import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DoseScheduleMixin } from '../lib/DoseSchedule';
import { RecommendedDoseScheduleMixin } from '../lib/RecommendedDoseSchedule';

export const RecommendedDoseScheduleBundle = [
  DoseScheduleMixin as Mixin,
  RecommendedDoseScheduleMixin as Mixin];
