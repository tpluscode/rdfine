import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalProcedureMixin } from '../MedicalProcedure';
import { DiagnosticProcedureMixin } from '../DiagnosticProcedure';

export const DiagnosticProcedureBundle = [
  MedicalProcedureMixin as Mixin,
  DiagnosticProcedureMixin as Mixin];
