import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AnatomicalStructureMixin } from '../lib/AnatomicalStructure';
import { AnatomicalSystemMixin } from '../lib/AnatomicalSystem';
import { DDxElementMixin } from '../lib/DDxElement';
import { DrugMixin } from '../lib/Drug';
import { MedicalConditionMixin } from '../lib/MedicalCondition';
import { MedicalConditionStageMixin } from '../lib/MedicalConditionStage';
import { MedicalEntityMixin } from '../lib/MedicalEntity';
import { MedicalRiskFactorMixin } from '../lib/MedicalRiskFactor';
import { MedicalSignOrSymptomMixin } from '../lib/MedicalSignOrSymptom';
import { MedicalTestMixin } from '../lib/MedicalTest';
import { MedicalTherapyMixin } from '../lib/MedicalTherapy';
import { SuperficialAnatomyMixin } from '../lib/SuperficialAnatomy';

export const MedicalConditionBundle = [
  AnatomicalStructureMixin as Mixin,
  AnatomicalSystemMixin as Mixin,
  DDxElementMixin as Mixin,
  DrugMixin as Mixin,
  MedicalConditionMixin as Mixin,
  MedicalConditionStageMixin as Mixin,
  MedicalEntityMixin as Mixin,
  MedicalRiskFactorMixin as Mixin,
  MedicalSignOrSymptomMixin as Mixin,
  MedicalTestMixin as Mixin,
  MedicalTherapyMixin as Mixin,
  SuperficialAnatomyMixin as Mixin];
