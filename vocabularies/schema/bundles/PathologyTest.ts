import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { PathologyTestMixin } from '../lib/PathologyTest';

export const PathologyTestBundle = [
  MedicalTestMixin as Mixin,
  PathologyTestMixin as Mixin];
