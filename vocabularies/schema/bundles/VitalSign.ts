import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalSignMixin } from '../lib/MedicalSign';
import { VitalSignMixin } from '../lib/VitalSign';

export const VitalSignBundle = [
  MedicalSignMixin as Mixin,
  VitalSignMixin as Mixin];
