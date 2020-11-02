import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTestMixin } from '../MedicalTest';
import { MedicalTestPanelMixin } from '../MedicalTestPanel';

export const MedicalTestPanelBundle = [
  MedicalTestMixin as Mixin,
  MedicalTestPanelMixin as Mixin];
