import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { ImageObjectMixin } from '../lib/ImageObject';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';

export const AnatomicalStructureBundle = [
  MedicalEntityMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  ImageObjectMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalTherapyMixin as Mixin];
