import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { DiagnosticLabMixin } from '../lib/DiagnosticLab';
import { MedicalTestMixin } from '../lib/MedicalTest';

export const DiagnosticLabBundle = [
  MedicalOrganizationMixin as Mixin,
  DiagnosticLabMixin as Mixin,
  MedicalTestMixin as Mixin];
