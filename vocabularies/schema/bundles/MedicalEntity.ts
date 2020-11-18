import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalCodeMixin } from '../lib/MedicalCode';
import { MedicalGuidelineMixin } from '../lib/MedicalGuideline';
import { DrugLegalStatusMixin } from '../lib/DrugLegalStatus';
import { OrganizationMixin } from '../lib/Organization';
import { MedicalStudyMixin } from '../lib/MedicalStudy';

export const MedicalEntityBundle = [
  ThingMixin as Mixin,
  MedicalEntityMixin as Mixin,
  MedicalCodeMixin as Mixin,
  MedicalGuidelineMixin as Mixin,
  DrugLegalStatusMixin as Mixin,
  OrganizationMixin as Mixin,
  MedicalStudyMixin as Mixin];
