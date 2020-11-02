import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTherapyMixin } from '../MedicalTherapy';
import { OccupationalTherapyMixin } from '../OccupationalTherapy';

export const OccupationalTherapyBundle = [
  MedicalTherapyMixin as Mixin,
  OccupationalTherapyMixin as Mixin];
