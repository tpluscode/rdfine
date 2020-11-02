import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalIndicationMixin } from '../MedicalIndication';
import { TreatmentIndicationMixin } from '../TreatmentIndication';

export const TreatmentIndicationBundle = [
  MedicalIndicationMixin as Mixin,
  TreatmentIndicationMixin as Mixin];
