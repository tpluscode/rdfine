import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TherapeuticProcedureMixin } from '../TherapeuticProcedure';
import { MedicalTherapyMixin } from '../MedicalTherapy';
import { MedicalContraindicationMixin } from '../MedicalContraindication';
import { MedicalEntityMixin } from '../MedicalEntity';

export const MedicalTherapyBundle = [
  TherapeuticProcedureMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  MedicalContraindicationMixin as Mixin,
  MedicalEntityMixin as Mixin];
