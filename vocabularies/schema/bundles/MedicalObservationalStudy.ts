import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalStudyMixin } from '../lib/MedicalStudy';
import { MedicalObservationalStudyMixin } from '../lib/MedicalObservationalStudy';

export const MedicalObservationalStudyBundle = [
  MedicalStudyMixin as Mixin,
  MedicalObservationalStudyMixin as Mixin];
