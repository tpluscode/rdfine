import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalProcedureMixin } from '../MedicalProcedure';
import { MedicalTherapyMixin } from '../MedicalTherapy';
import { PalliativeProcedureMixin } from '../PalliativeProcedure';

export const PalliativeProcedureBundle = [
  MedicalProcedureMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  PalliativeProcedureMixin as Mixin];
