import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTestMixin } from '../MedicalTest';
import { PathologyTestMixin } from '../PathologyTest';

export const PathologyTestBundle = [
  MedicalTestMixin as Mixin,
  PathologyTestMixin as Mixin];
