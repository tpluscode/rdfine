import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalStudyMixin } from '../MedicalStudy';
import { MedicalTrialMixin } from '../MedicalTrial';

export const MedicalTrialBundle = [
  MedicalStudyMixin as Mixin,
  MedicalTrialMixin as Mixin];
