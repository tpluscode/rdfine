import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalStudyMixin } from '../MedicalStudy';
import { MedicalObservationalStudyMixin } from '../MedicalObservationalStudy';

export const MedicalObservationalStudyBundle = [
  MedicalStudyMixin as Mixin,
  MedicalObservationalStudyMixin as Mixin];
