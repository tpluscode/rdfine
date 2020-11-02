import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../Thing';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalCodeMixin } from '../MedicalCode';
import { MedicalGuidelineMixin } from '../MedicalGuideline';
import { DrugLegalStatusMixin } from '../DrugLegalStatus';
import { OrganizationMixin } from '../Organization';
import { MedicalStudyMixin } from '../MedicalStudy';

export const MedicalEntityBundle = [
  ThingMixin as Mixin,
  MedicalEntityMixin as Mixin,
  MedicalCodeMixin as Mixin,
  MedicalGuidelineMixin as Mixin,
  DrugLegalStatusMixin as Mixin,
  OrganizationMixin as Mixin,
  MedicalStudyMixin as Mixin];
