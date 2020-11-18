import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { SurgicalProcedureMixin } from '../lib/SurgicalProcedure';

export const SurgicalProcedureBundle = [
  MedicalProcedureMixin as Mixin,
  SurgicalProcedureMixin as Mixin];
