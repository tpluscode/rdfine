import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTherapyMixin } from '../MedicalTherapy';
import { PhysicalTherapyMixin } from '../PhysicalTherapy';

export const PhysicalTherapyBundle = [
  MedicalTherapyMixin as Mixin,
  PhysicalTherapyMixin as Mixin];
