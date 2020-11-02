import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../MedicalEntity';
import { SuperficialAnatomyMixin } from '../SuperficialAnatomy';
import { AnatomicalStructureMixin } from '../AnatomicalStructure';
import { AnatomicalSystemMixin } from '../AnatomicalSystem';
import { MedicalConditionMixin } from '../MedicalCondition';
import { MedicalTherapyMixin } from '../MedicalTherapy';

export const SuperficialAnatomyBundle = [
  MedicalEntityMixin as Mixin,
  SuperficialAnatomyMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalTherapyMixin as Mixin];
