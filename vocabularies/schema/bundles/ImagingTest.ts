import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ImagingTestMixin } from '../lib/ImagingTest';
import { MedicalTestMixin } from '../lib/MedicalTest';

export const ImagingTestBundle = [
  ImagingTestMixin as Mixin,
  MedicalTestMixin as Mixin];
