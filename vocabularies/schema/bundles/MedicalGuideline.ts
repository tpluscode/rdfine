import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { MedicalGuidelineMixin } from '../MedicalGuideline';

export const MedicalGuidelineBundle = [
  MedicalEntityMixin as Mixin,
  MedicalGuidelineMixin as Mixin];
