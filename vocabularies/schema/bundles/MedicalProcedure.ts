import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalProcedureMixin } from '../lib/MedicalProcedure';

export const MedicalProcedureBundle = [
  MedicalEntityMixin as Mixin,
  MedicalProcedureMixin as Mixin];
