import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { ImagingTestMixin } from '../lib/ImagingTest';

export const ImagingTestBundle = [
  MedicalTestMixin as Mixin,
  ImagingTestMixin as Mixin];
