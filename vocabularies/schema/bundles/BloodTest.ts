import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { BloodTestMixin } from '../lib/BloodTest';

export const BloodTestBundle = [
  MedicalTestMixin as Mixin,
  BloodTestMixin as Mixin];
