import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { MedicalTestPanelMixin } from '../lib/MedicalTestPanel';

export const MedicalTestPanelBundle = [
  MedicalTestMixin as Mixin,
  MedicalTestPanelMixin as Mixin];
