import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DoseScheduleMixin } from '../lib/DoseSchedule';
import { MedicalIntangibleMixin } from '../lib/MedicalIntangible';

export const DoseScheduleBundle = [
  DoseScheduleMixin as Mixin,
  MedicalIntangibleMixin as Mixin];
