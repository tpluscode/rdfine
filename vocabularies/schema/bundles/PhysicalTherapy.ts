import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { PhysicalTherapyMixin } from '../lib/PhysicalTherapy';

export const PhysicalTherapyBundle = [
  MedicalTherapyMixin as Mixin,
  PhysicalTherapyMixin as Mixin];
