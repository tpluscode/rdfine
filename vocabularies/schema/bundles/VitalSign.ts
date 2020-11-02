import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalSignMixin } from '../MedicalSign';
import { VitalSignMixin } from '../VitalSign';

export const VitalSignBundle = [
  MedicalSignMixin as Mixin,
  VitalSignMixin as Mixin];
