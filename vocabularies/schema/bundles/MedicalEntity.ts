import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DrugLegalStatusMixin } from '../lib/DrugLegalStatus';
import { MedicalCodeMixin } from '../lib/MedicalCode';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalGuidelineMixin } from '../lib/MedicalGuideline';
import { MedicalStudyMixin } from '../lib/MedicalStudy';
import { OrganizationMixin } from '../lib/Organization';
import { ThingMixin } from '../lib/Thing';

export const MedicalEntityBundle = [
  DrugLegalStatusMixin as Mixin,
  MedicalCodeMixin as Mixin,
  MedicalEntityMixin as Mixin,
  MedicalGuidelineMixin as Mixin,
  MedicalStudyMixin as Mixin,
  OrganizationMixin as Mixin,
  ThingMixin as Mixin];
