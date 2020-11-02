import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTherapyMixin } from '../MedicalTherapy';
import { RadiationTherapyMixin } from '../RadiationTherapy';

export const RadiationTherapyBundle = [
  MedicalTherapyMixin as Mixin,
  RadiationTherapyMixin as Mixin];
