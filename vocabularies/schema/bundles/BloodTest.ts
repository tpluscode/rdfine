import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BloodTestMixin } from '../lib/BloodTest';
import { MedicalTestMixin } from '../lib/MedicalTest';

export const BloodTestBundle = [
  BloodTestMixin as Mixin,
  MedicalTestMixin as Mixin];
