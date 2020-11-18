import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { OccupationalTherapyMixin } from '../lib/OccupationalTherapy';

export const OccupationalTherapyBundle = [
  MedicalTherapyMixin as Mixin,
  OccupationalTherapyMixin as Mixin];
