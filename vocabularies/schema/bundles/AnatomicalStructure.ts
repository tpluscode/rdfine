import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { ImageObjectMixin } from '../ImageObject';
import { AnatomicalSystemMixin } from '../AnatomicalSystem';
import { MedicalConditionMixin } from '../MedicalCondition';
import { MedicalTherapyMixin } from '../MedicalTherapy';

export const AnatomicalStructureBundle = [
  MedicalEntityMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  ImageObjectMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalTherapyMixin as Mixin];
