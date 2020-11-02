import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { AnatomicalSystemMixin } from '../AnatomicalSystem';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { MedicalConditionMixin } from '../MedicalCondition';
import { MedicalTherapyMixin } from '../MedicalTherapy';

export const AnatomicalSystemBundle = [
  MedicalEntityMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalTherapyMixin as Mixin];
