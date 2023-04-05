import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalCauseMixin } from '../lib/MedicalCause';
import { MedicalEntityMixin } from '../lib/MedicalEntity';

export const MedicalCauseBundle = [
  MedicalCauseMixin as Mixin,
  MedicalEntityMixin as Mixin];
