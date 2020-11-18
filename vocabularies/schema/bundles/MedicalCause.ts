import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalCauseMixin } from '../lib/MedicalCause';

export const MedicalCauseBundle = [
  MedicalEntityMixin as Mixin,
  MedicalCauseMixin as Mixin];
