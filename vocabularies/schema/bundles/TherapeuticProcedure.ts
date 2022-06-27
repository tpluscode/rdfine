import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DoseScheduleMixin } from '../lib/DoseSchedule';
import { DrugMixin } from '../lib/Drug';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { TherapeuticProcedureMixin } from '../lib/TherapeuticProcedure';

export const TherapeuticProcedureBundle = [
  DoseScheduleMixin as Mixin,
  DrugMixin as Mixin,
  MedicalEntityMixin as Mixin,
  MedicalProcedureMixin as Mixin,
  TherapeuticProcedureMixin as Mixin];
