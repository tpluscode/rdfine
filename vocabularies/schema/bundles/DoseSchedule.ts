import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';
import { DoseScheduleMixin } from '../lib/DoseSchedule';

export const DoseScheduleBundle = [
  MedicalIntangibleMixin as Mixin,
  DoseScheduleMixin as Mixin];
