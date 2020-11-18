import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalStudyMixin } from '../lib/MedicalStudy';
import { MedicalTrialMixin } from '../lib/MedicalTrial';

export const MedicalTrialBundle = [
  MedicalStudyMixin as Mixin,
  MedicalTrialMixin as Mixin];
