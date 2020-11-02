import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DoseScheduleMixin } from '../DoseSchedule';
import { RecommendedDoseScheduleMixin } from '../RecommendedDoseSchedule';

export const RecommendedDoseScheduleBundle = [
  DoseScheduleMixin as Mixin,
  RecommendedDoseScheduleMixin as Mixin];
