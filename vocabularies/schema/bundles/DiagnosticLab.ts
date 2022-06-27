import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DiagnosticLabMixin } from '../lib/DiagnosticLab';
import { MedicalOrganizationMixin } from '../lib/MedicalOrganization';
import { MedicalTestMixin } from '../lib/MedicalTest';

export const DiagnosticLabBundle = [
  DiagnosticLabMixin as Mixin,
  MedicalOrganizationMixin as Mixin,
  MedicalTestMixin as Mixin];
