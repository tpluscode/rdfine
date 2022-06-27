import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { ImageObjectMixin } from '../lib/ImageObject';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';

export const AnatomicalStructureBundle = [
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  ImageObjectMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalEntityMixin as Mixin,
  MedicalTherapyMixin as Mixin];
