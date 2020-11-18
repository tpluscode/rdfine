import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';

export const AnatomicalSystemBundle = [
  MedicalEntityMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalTherapyMixin as Mixin];
