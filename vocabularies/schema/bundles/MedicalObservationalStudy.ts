import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalObservationalStudyMixin } from '../lib/MedicalObservationalStudy';
import { MedicalStudyMixin } from '../lib/MedicalStudy';

export const MedicalObservationalStudyBundle = [
  MedicalObservationalStudyMixin as Mixin,
  MedicalStudyMixin as Mixin];
