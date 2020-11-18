import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { DiagnosticProcedureMixin } from '../lib/DiagnosticProcedure';

export const DiagnosticProcedureBundle = [
  MedicalProcedureMixin as Mixin,
  DiagnosticProcedureMixin as Mixin];
