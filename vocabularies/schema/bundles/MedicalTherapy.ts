import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalContraindicationMixin } from '../lib/MedicalContraindication';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { TherapeuticProcedureMixin } from '../lib/TherapeuticProcedure';

export const MedicalTherapyBundle = [
  MedicalContraindicationMixin as Mixin,
  MedicalEntityMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  TherapeuticProcedureMixin as Mixin];
