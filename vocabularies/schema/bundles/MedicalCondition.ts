import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { SuperficialAnatomyMixin } from '../lib/SuperficialAnatomy';
import { DDxElementMixin } from '../lib/DDxElement';
import { DrugMixin } from '../lib/Drug';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { MedicalRiskFactorMixin } from '../lib/MedicalRiskFactor';
import { MedicalSignOrSymptomMixin } from '../lib/MedicalSignOrSymptom';
import { MedicalConditionStageMixin } from '../lib/MedicalConditionStage';
import { MedicalTestMixin } from '../lib/MedicalTest';

export const MedicalConditionBundle = [
  MedicalEntityMixin as Mixin,
  MedicalConditionMixin as Mixin,
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  SuperficialAnatomyMixin as Mixin,
  DDxElementMixin as Mixin,
  DrugMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  MedicalRiskFactorMixin as Mixin,
  MedicalSignOrSymptomMixin as Mixin,
  MedicalConditionStageMixin as Mixin,
  MedicalTestMixin as Mixin];
