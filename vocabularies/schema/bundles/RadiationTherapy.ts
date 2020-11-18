import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { RadiationTherapyMixin } from '../lib/RadiationTherapy';

export const RadiationTherapyBundle = [
  MedicalTherapyMixin as Mixin,
  RadiationTherapyMixin as Mixin];
