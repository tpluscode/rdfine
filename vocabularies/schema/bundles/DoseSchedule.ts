import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIntangibleMixin } from '../MedicalIntangible';
import { DoseScheduleMixin } from '../DoseSchedule';

export const DoseScheduleBundle = [
  MedicalIntangibleMixin as Mixin,
  DoseScheduleMixin as Mixin];
