import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalProcedureMixin } from '../MedicalProcedure';

export const MedicalProcedureBundle = [
  MedicalEntityMixin as Mixin,
  MedicalProcedureMixin as Mixin];
