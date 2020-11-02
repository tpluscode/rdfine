import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalStudyMixin } from '../MedicalStudy';
import { MedicalConditionMixin } from '../MedicalCondition';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { AdministrativeAreaMixin } from '../AdministrativeArea';

export const MedicalStudyBundle = [
  MedicalEntityMixin as Mixin,
  MedicalStudyMixin as Mixin,
  MedicalConditionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
