import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTestMixin } from '../MedicalTest';
import { BloodTestMixin } from '../BloodTest';

export const BloodTestBundle = [
  MedicalTestMixin as Mixin,
  BloodTestMixin as Mixin];
