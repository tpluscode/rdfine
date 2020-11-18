import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { SuperficialAnatomyMixin } from '../lib/SuperficialAnatomy';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';

export const SuperficialAnatomyBundle = [
  MedicalEntityMixin as Mixin,
  SuperficialAnatomyMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalTherapyMixin as Mixin];
