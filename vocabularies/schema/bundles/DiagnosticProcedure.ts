import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DiagnosticProcedureMixin } from '../lib/DiagnosticProcedure';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';

export const DiagnosticProcedureBundle = [
  DiagnosticProcedureMixin as Mixin,
  MedicalProcedureMixin as Mixin];
