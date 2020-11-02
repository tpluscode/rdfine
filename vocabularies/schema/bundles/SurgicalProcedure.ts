import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalProcedureMixin } from '../MedicalProcedure';
import { SurgicalProcedureMixin } from '../SurgicalProcedure';

export const SurgicalProcedureBundle = [
  MedicalProcedureMixin as Mixin,
  SurgicalProcedureMixin as Mixin];
