import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { PalliativeProcedureMixin } from '../lib/PalliativeProcedure';

export const PalliativeProcedureBundle = [
  MedicalProcedureMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  PalliativeProcedureMixin as Mixin];
