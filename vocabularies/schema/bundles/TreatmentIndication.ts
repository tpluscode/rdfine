import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIndicationMixin } from '../lib/MedicalIndication';
import { TreatmentIndicationMixin } from '../lib/TreatmentIndication';

export const TreatmentIndicationBundle = [
  MedicalIndicationMixin as Mixin,
  TreatmentIndicationMixin as Mixin];
