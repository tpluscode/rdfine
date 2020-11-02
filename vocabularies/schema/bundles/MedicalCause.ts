import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalCauseMixin } from '../MedicalCause';

export const MedicalCauseBundle = [
  MedicalEntityMixin as Mixin,
  MedicalCauseMixin as Mixin];
