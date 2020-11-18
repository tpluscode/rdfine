import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalStudyMixin } from '../lib/MedicalStudy';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { AdministrativeAreaMixin } from '../lib/AdministrativeArea';

export const MedicalStudyBundle = [
  MedicalEntityMixin as Mixin,
  MedicalStudyMixin as Mixin,
  MedicalConditionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  AdministrativeAreaMixin as Mixin];
