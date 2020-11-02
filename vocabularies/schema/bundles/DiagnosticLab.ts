import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../MedicalOrganization';
import { DiagnosticLabMixin } from '../DiagnosticLab';
import { MedicalTestMixin } from '../MedicalTest';

export const DiagnosticLabBundle = [
  MedicalOrganizationMixin as Mixin,
  DiagnosticLabMixin as Mixin,
  MedicalTestMixin as Mixin];
