import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { SuperficialAnatomyMixin } from '../lib/SuperficialAnatomy';

export const SuperficialAnatomyBundle = [
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalEntityMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  SuperficialAnatomyMixin as Mixin];
