import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTestMixin } from '../MedicalTest';
import { ImagingTestMixin } from '../ImagingTest';

export const ImagingTestBundle = [
  MedicalTestMixin as Mixin,
  ImagingTestMixin as Mixin];
