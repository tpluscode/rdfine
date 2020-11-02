import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalProcedureMixin } from '../MedicalProcedure';
import { TherapeuticProcedureMixin } from '../TherapeuticProcedure';
import { MedicalEntityMixin } from '../MedicalEntity';
import { DoseScheduleMixin } from '../DoseSchedule';
import { DrugMixin } from '../Drug';

export const TherapeuticProcedureBundle = [
  MedicalProcedureMixin as Mixin,
  TherapeuticProcedureMixin as Mixin,
  MedicalEntityMixin as Mixin,
  DoseScheduleMixin as Mixin,
  DrugMixin as Mixin];
