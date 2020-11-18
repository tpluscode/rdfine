import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TherapeuticProcedureMixin } from '../lib/TherapeuticProcedure';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { MedicalContraindicationMixin } from '../lib/MedicalContraindication';
import { MedicalEntityMixin } from '../lib/MedicalEntity';

export const MedicalTherapyBundle = [
  TherapeuticProcedureMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  MedicalContraindicationMixin as Mixin,
  MedicalEntityMixin as Mixin];
