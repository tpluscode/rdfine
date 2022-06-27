import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalStudyMixin } from '../lib/MedicalStudy';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const MedicalStudyBundle = [
  AdministrativeAreaMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalEntityMixin as Mixin,
  MedicalStudyMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
