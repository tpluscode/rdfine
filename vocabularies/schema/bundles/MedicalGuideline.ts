import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalGuidelineMixin } from '../lib/MedicalGuideline';

export const MedicalGuidelineBundle = [
  MedicalEntityMixin as Mixin,
  MedicalGuidelineMixin as Mixin];
