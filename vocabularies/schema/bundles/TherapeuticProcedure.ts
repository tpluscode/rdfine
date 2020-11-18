import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { TherapeuticProcedureMixin } from '../lib/TherapeuticProcedure';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { DoseScheduleMixin } from '../lib/DoseSchedule';
import { DrugMixin } from '../lib/Drug';

export const TherapeuticProcedureBundle = [
  MedicalProcedureMixin as Mixin,
  TherapeuticProcedureMixin as Mixin,
  MedicalEntityMixin as Mixin,
  DoseScheduleMixin as Mixin,
  DrugMixin as Mixin];
